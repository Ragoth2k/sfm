// import express from 'express'; // Import express
// import authenticateToken from '../../../middlewares/auth.js'; // Import the authentication middleware
// import db from '../../../config/db_config.js'; // Import the database configuration
// import nodemailer from 'nodemailer'; // Nodemailer for email functionality

// const router = express.Router(); // Use express.Router() correctly

// // Utility function to format datetime to 'YYYY-MM-DD HH:MM:SS'
// const formatDateTime = (datetime) => {
//   const date = new Date(datetime);
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const day = String(date.getDate()).padStart(2, '0');
//   const hours = String(date.getHours()).padStart(2, '0');
//   const minutes = String(date.getMinutes()).padStart(2, '0');
//   const seconds = String(date.getSeconds()).padStart(2, '0');
//   return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
// };

// // Utility function to generate a visitor_code with 4 letters and 4 numbers
// const generateVisitorCode = () => {
//   const letters = Array.from({ length: 4 }, () =>
//     String.fromCharCode(65 + Math.floor(Math.random() * 26))
//   ).join('');
//   const numbers = String(Math.floor(1000 + Math.random() * 9000));
//   return `${letters}${numbers}`;
// };

// // Configure Nodemailer transport
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'ragothreddy2002@gmail.com', // Your email
//     pass: 'glxz bnku dloh kdtu', // App password (for Gmail)
//   },
// });

// // Route: Add a visitor
// router.post('/add_visitor', authenticateToken, async (req, res) => {
//   const visitorData = Array.isArray(req.body) ? req.body[0] : req.body;
//   const { requestor_name, visitor_name, visitor_email, expected_arrival_time } = visitorData;

//   if (!requestor_name || !visitor_name || !visitor_email) {
//     return res.status(400).json({ Status: false, Error: 'Required fields are missing.' });
//   }

//   try {
//     const visitor_code = generateVisitorCode();
//     const created_at = new Date().toISOString().slice(0, 10);

//     const visitorSql = `INSERT INTO visitor_management
//   (requestor_name, visitor_name, visitor_email, expected_arrival_time, visitor_code, created_at)
//   VALUES (?, ?, ?, ?, ?, ?);
// `;

//     const visitorValues = [
//       requestor_name,
//       visitor_name,
//       visitor_email,
//       expected_arrival_time,       
//       visitor_code,     
//       created_at,
//     ];

//     const [result] = await db.query(visitorSql, visitorValues);

//     const mailOptions = {
//       from: 'ragothreddy2002@gmail.com',
//       to: visitor_email,
//       subject: 'Visitor Invitation Confirmation',
//       text: `Hello ${visitor_name},\n\nYour Visitor Code: ${visitor_code}\n\nBest regards,\nVisitor Management Team`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//         return res.status(500).json({ Status: false, Error: 'Failed to send email.', Details: error.message });
//       }
//       console.log('Email sent:', info.response);
//     });

//     res.json({ Status: true, Message: 'Visitor added successfully.', VisitorID: result.insertId, visitor_code });
//   } catch (err) {
//     console.error('Error adding visitor:', err.message);
//     res.status(500).json({ Status: false, Error: 'Failed to add visitor.', Details: err.message });
//   }
// });

// // Route: Get all visitors
// router.get('/visitors', authenticateToken, async (req, res) => {
//   const sql = 'SELECT * FROM visitor_management';
//   try {
//     const [result] = await db.query(sql);
//     res.json({ Status: true, Result: result });
//   } catch (err) {
//     console.error('Error fetching visitors:', err.message);
//     res.status(500).json({ Status: false, Error: 'Failed to fetch visitors.', Details: err.message });
//   }
// });

// // Route: Get visitor by ID
// router.get('/get_visitor/:id', authenticateToken, async (req, res) => {
//   const id = req.params.id;
//   const sql = 'SELECT * FROM visitor_management WHERE id = ?';
//     try {
//       const [result] = await db.query(sql, [id]);
//       res.json({ Status: true, Result: result });
//   } catch (err) {
//       res.json({ Status: false, Error: err.message });
//   }
// });

// // Route: Delete a visitor by ID
// router.delete('/delete_visitor/:id', authenticateToken, async (req, res) => {
//   const id = req.params.id;
//   const sql = 'DELETE FROM visitor_management WHERE id = ?';

//   try {
//     const [result] = await db.query(sql, [id]);
//     if (result.affectedRows === 0) {
//       return res.status(404).json({ Status: false, Error: 'Visitor not found or already deleted.' });
//     }
//     res.json({ Status: true, Message: 'Visitor deleted successfully.' });
//   } catch (err) {
//     console.error('Error deleting visitor:', err.message);
//     res.status(500).json({ Status: false, Error: 'Failed to delete visitor.', Details: err.message });
//   }
// });

// router.put('/edit_visitor/:id',authenticateToken, async (req,res)=>{
//   const id = req.params.id;
//   const sql = `UPDATE visitor_management
//       SET requestor_name = ?, visitor_name = ?, visitor_email = ?,expected_arrival_time=?
//       WHERE id = ?`;
//   const values = [
//       req.body.requestor_name,
//       req.body.visitor_name,
//       req.body.visitor_email,
//       req.body.expected_arrival_time,
//   ];

//   try {
//       const [result] = await db.query(sql, [...values, id]);
//       res.json({ Status: true, Result: result });
//   } catch (err) {
//       res.json({ Status: false, Error: err.message });
//   }
// });


// export default router;



import express from 'express'; // Import express
import authenticateToken from '../../../middlewares/auth.js'; // Import the authentication middleware
import db from '../../../config/db_config.js'; // Import the database configuration
import nodemailer from 'nodemailer'; // Nodemailer for email functionality

const router = express.Router(); // Use express.Router() correctly

// Utility function to format datetime to 'YYYY-MM-DD HH:MM:SS'
const formatDateTime = (datetime) => {
  const date = new Date(datetime);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

// Utility function to generate a visitor_code with 4 letters and 4 numbers
const generateVisitorCode = () => {
  const letters = Array.from({ length: 4 }, () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 26))
  ).join('');
  const numbers = String(Math.floor(1000 + Math.random() * 9000));
  return `${letters}${numbers}`;
};

// Configure Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ragothreddy2002@gmail.com', // Your email
    pass: 'glxz bnku dloh kdtu', // App password (for Gmail)
  },
});

// Route: Add a visitor
router.post('/add_visitor', authenticateToken, async (req, res) => {
  const visitorData = Array.isArray(req.body) ? req.body[0] : req.body;
  const { requestor_name, visitor_name, visitor_email, expected_arrival_time, visiting_purpose } = visitorData;

  if (!requestor_name || !visitor_name || !visitor_email || !visiting_purpose) {
    return res.status(400).json({ Status: false, Error: 'Required fields are missing.' });
  }

  try {
    const visitor_code = generateVisitorCode();
    const created_at = new Date().toISOString().slice(0, 10);

    const visitorSql = `INSERT INTO visitor_management
      (requestor_name, visitor_name, visitor_email, expected_arrival_time, visiting_purpose, visitor_code, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?);
    `;

    const visitorValues = [
      requestor_name,
      visitor_name,
      visitor_email,
      expected_arrival_time,
      visiting_purpose,
      visitor_code,
      created_at,
    ];

    const [result] = await db.query(visitorSql, visitorValues);

    const mailOptions = {
      from: 'ragothreddy2002@gmail.com',
      to: visitor_email,
      subject: 'Visitor Invitation Confirmation',
      text: `Hello ${visitor_name},\n\nYour Visitor Code: ${visitor_code}, \nYour Expected Arrival Time: ${expected_arrival_time},\n invited for the below venue `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ Status: false, Error: 'Failed to send email.', Details: error.message });
      }
      console.log('Email sent:', info.response);
    });

    res.json({ Status: true, Message: 'Visitor added successfully.', VisitorID: result.insertId, visitor_code });
  } catch (err) {
    console.error('Error adding visitor:', err.message);
    res.status(500).json({ Status: false, Error: 'Failed to add visitor.', Details: err.message });
  }
});

// Route: Get all visitors
router.get('/visitors', authenticateToken, async (req, res) => {
  const sql = 'SELECT * FROM visitor_management';
  try {
    const [result] = await db.query(sql);
    res.json({ Status: true, Result: result });
  } catch (err) {
    console.error('Error fetching visitors:', err.message);
    res.status(500).json({ Status: false, Error: 'Failed to fetch visitors.', Details: err.message });
  }
});

// Route: Get visitor by ID
router.get('/get_visitor/:id', authenticateToken, async (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM visitor_management WHERE id = ?';
  try {
    const [result] = await db.query(sql, [id]);
    res.json({ Status: true, Result: result });
  } catch (err) {
    res.json({ Status: false, Error: err.message });
  }
});

// Route: Delete a visitor by ID
router.delete('/delete_visitor/:id', authenticateToken, async (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM visitor_management WHERE id = ?';

  try {
    const [result] = await db.query(sql, [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ Status: false, Error: 'Visitor not found or already deleted.' });
    }
    res.json({ Status: true, Message: 'Visitor deleted successfully.' });
  } catch (err) {
    console.error('Error deleting visitor:', err.message);
    res.status(500).json({ Status: false, Error: 'Failed to delete visitor.', Details: err.message });
  }
});

// Route: Edit a visitor by ID
router.put('/edit_visitor/:id', authenticateToken, async (req, res) => {
  const id = req.params.id;
  const { requestor_name, visitor_name, visitor_email, expected_arrival_time, visiting_purpose } = req.body;

  const sql = `UPDATE visitor_management
      SET requestor_name = ?, visitor_name = ?, visitor_email = ?, expected_arrival_time = ?, visiting_purpose = ?
      WHERE id = ?`;

  const values = [
    requestor_name,
    visitor_name,
    visitor_email,
    expected_arrival_time,
    visiting_purpose,
    id,
  ];

  try {
    const [result] = await db.query(sql, values);
    res.json({ Status: true, Result: result });
  } catch (err) {
    res.json({ Status: false, Error: err.message });
  }
});

export default router;
