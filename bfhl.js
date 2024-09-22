export default function handler(req, res) {
    if (req.method === 'POST') {
      const { data } = req.body;
  
      if (!data) {
        return res.status(400).json({ is_success: false, message: 'No data provided' });
      }
  
      // Separate numbers and alphabets
      const numbers = data.filter(item => !isNaN(item));
      const alphabets = data.filter(item => isNaN(item));
      const lowercaseAlphabets = alphabets.filter(a => a === a.toLowerCase());
      const highestLowercaseAlphabet = lowercaseAlphabets.length
        ? [lowercaseAlphabets.sort().reverse()[0]]
        : [];
  
      res.status(200).json({
        is_success: true,
        user_id: 'john_doe_17091999',
        email: 'john@xyz.com',
        roll_number: 'ABCD123',
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet,
        file_valid: false,
      });
    } else if (req.method === 'GET') {
      res.status(200).json({ operation_code: 1 });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  