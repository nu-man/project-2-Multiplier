const express = require('express');
const bodyParser = require('body-parser');
const Sentiment = require('sentiment');
const xlsx = require('xlsx');
const cors = require('cors');
const path = require('path');

const app = express();
const sentiment = new Sentiment();

app.use(bodyParser.json());
app.use(cors());

// Updated file path
const filePath = path.join(__dirname, 'assets', 'Data.xlsx');

app.post('/analyze', (req, res) => {
    try {
        const { keyword } = req.body;

        if (!keyword) {
            return res.status(400).json({ error: 'Keyword is required' });
        }

        // Load the Excel file
        const workbook = xlsx.readFile(filePath);
        const sheet_name_list = workbook.SheetNames;
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

        // Assuming the messages are in a column named 'member_msg_content'
        const filteredMessages = data.filter(row => row.member_msg_content && row.member_msg_content.includes(keyword));
        const sentimentResults = { Positive: 0, Negative: 0, Neutral: 0 };

        filteredMessages.forEach(row => {
            const result = sentiment.analyze(row.member_msg_content);
            if (result.score > 0) sentimentResults.Positive++;
            else if (result.score < 0) sentimentResults.Negative++;
            else sentimentResults.Neutral++;
        });

        res.json(sentimentResults);
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
