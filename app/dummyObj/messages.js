export const messages = [
    {
        id: '1',
        customerName: 'John Doe',
        preview: 'I was charged twice for my subscription',
        content:
            'Hello, I noticed that I was charged twice for my monthly subscription...',
        timestamp: new Date(),
        priority: 'high',
        sentiment: 'negative',
        category: 'billing',
        status: 'open',

        ai: {
            summary: [
                'Customer reports being charged twice for one subscription',
                'Issue occurred on the latest billing cycle',
                'Customer requests a refund or clarification',
            ],
            suggestedReply:
                'Hi John, thanks for reaching out. Sorry for the inconvenience. I can see the duplicate charge and will help resolve this immediately.',
            confidence: 0.92,
        },
    },
]
