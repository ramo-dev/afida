const jwt = require('jsonwebtoken');

// Verify User Function
const verifyUser = (req, res) => {
    const { walletAddress, token } = req.body;

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        const user = { 
            walletAddress: walletAddress,
            name: 'John Doe',
            email: 'john.doe@example.com'
        };

        res.status(200).json(user);
    });
};

// Get User Campaigns and Contributions Function
const getUserCampaignsAndContributions = (req, res) => {
    const { walletAddress } = req.body;

    const campaigns = [
        {
            id: 'campaign1',
            title: 'Save the Earth',
            amountContributed: 100,
            date: '2024-01-01'
        },
        {
            id: 'campaign2',
            title: 'Feed the Hungry',
            amountContributed: 50,
            date: '2024-02-01'
        }
    ];

    res.status(200).json({ walletAddress, campaigns });
};

module.exports = {
    verifyUser,
    getUserCampaignsAndContributions
};
