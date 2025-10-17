export const menuData = {
  title: "Juspay Documentation",
  description: "Complete guide to Juspay's payment solutions and integrations",
  icon: "BookOpen",
  children: [
    {
      title: "Getting Started",
      description: "Learn the basics of integrating Juspay payments",
      icon: "Rocket",
      children: [
        {
          title: "Installation",
          description: "How to install and configure Juspay SDK",
          icon: "Settings",
          children: [
            {
              title: "Web Integration",
              description: "Integrate payments in your web application",
              icon: "Globe"
            },
            {
              title: "Mobile Integration",
              description: "Add payments to your mobile apps",
              icon: "Smartphone"
            }
          ]
        },
        {
          title: "Authentication",
          description: "Set up API keys and authentication",
          icon: "Shield",
          children: [
            {
              title: "API Keys",
              description: "Generate and manage your API credentials",
              icon: "Key"
            },
            {
              title: "Security",
              description: "Best practices for secure payment processing",
              icon: "Lock"
            }
          ]
        }
      ]
    },
    {
      title: "Payment Methods",
      description: "Explore supported payment options",
      icon: "CreditCard",
      children: [
        {
          title: "Credit/Debit Cards",
          description: "Accept Visa, Mastercard, and other card payments",
          icon: "CreditCard",
          children: [
            {
              title: "Card Validation",
              description: "Implement card number and CVV validation",
              icon: "CheckCircle"
            },
            {
              title: "3D Secure",
              description: "Enable enhanced security for card transactions",
              icon: "Shield"
            }
          ]
        },
        {
          title: "UPI",
          description: "Unified Payments Interface integration",
          icon: "QrCode",
          children: [
            {
              title: "UPI Setup",
              description: "Configure UPI payment collection",
              icon: "Settings"
            },
            {
              title: "UPI Apps",
              description: "Support for popular UPI applications",
              icon: "Smartphone"
            }
          ]
        },
        {
          title: "Net Banking",
          description: "Enable online banking payments",
          icon: "Building",
          children: [
            {
              title: "Bank List",
              description: "Supported banks for net banking",
              icon: "FileText"
            }
          ]
        }
      ]
    },
    {
      title: "Advanced Features",
      description: "Advanced payment processing capabilities",
      icon: "Zap",
      children: [
        {
          title: "Recurring Payments",
          description: "Set up subscription and recurring billing",
          icon: "RefreshCw",
          children: [
            {
              title: "Subscription Management",
              description: "Handle subscription lifecycles",
              icon: "Calendar"
            },
            {
              title: "Retry Logic",
              description: "Configure payment retry mechanisms",
              icon: "RotateCcw"
            }
          ]
        },
        {
          title: "Payment Links",
          description: "Generate dynamic payment links",
          icon: "Link",
          children: [
            {
              title: "Link Creation",
              description: "Create payment links programmatically",
              icon: "Plus"
            },
            {
              title: "Link Customization",
              description: "Customize payment page appearance",
              icon: "Palette"
            }
          ]
        }
      ]
    },
    {
      title: "Support & Troubleshooting",
      description: "Get help and resolve common issues",
      icon: "HelpCircle",
      children: [
        {
          title: "FAQ",
          description: "Frequently asked questions",
          icon: "MessageCircle",
          children: [
            {
              title: "Integration Issues",
              description: "Common integration problems and solutions",
              icon: "Wrench"
            },
            {
              title: "Payment Failures",
              description: "Debug payment transaction failures",
              icon: "XCircle"
            },
            {
              title: "API Rate Limits",
              description: "Understanding and handling API rate limits",
              icon: "Zap"
            },
            {
              title: "Webhook Issues",
              description: "Troubleshoot webhook delivery problems",
              icon: "Link"
            }
          ]
        },
        {
          title: "Contact Support",
          description: "Reach out to our support team",
          icon: "Phone"
        },
        {
          title: "System Status",
          description: "Check current system availability and incidents",
          icon: "CheckCircle"
        }
      ]
    },
    {
      title: "Analytics & Reporting",
      description: "Track payments, analyze trends, and generate reports",
      icon: "FileText",
      children: [
        {
          title: "Transaction Reports",
          description: "Generate detailed transaction reports",
          icon: "FileText",
          children: [
            {
              title: "Daily Reports",
              description: "Daily transaction summaries",
              icon: "Calendar"
            },
            {
              title: "Custom Reports",
              description: "Build custom reports with filters",
              icon: "Settings"
            }
          ]
        },
        {
          title: "Payment Analytics",
          description: "Analyze payment success rates and trends",
          icon: "Zap",
          children: [
            {
              title: "Success Metrics",
              description: "Track payment success and failure rates",
              icon: "CheckCircle"
            },
            {
              title: "Performance Insights",
              description: "Monitor payment gateway performance",
              icon: "TrendingUp"
            }
          ]
        }
      ]
    },
    {
      title: "Developer Tools",
      description: "Tools and resources for developers",
      icon: "Wrench",
      children: [
        {
          title: "API Documentation",
          description: "Complete API reference and examples",
          icon: "BookOpen",
          children: [
            {
              title: "REST API",
              description: "RESTful API endpoints and methods",
              icon: "Globe"
            },
            {
              title: "SDK Documentation",
              description: "Language-specific SDK guides",
              icon: "Smartphone"
            }
          ]
        },
        {
          title: "Testing Tools",
          description: "Test your integration before going live",
          icon: "CheckCircle",
          children: [
            {
              title: "Sandbox Environment",
              description: "Safe testing environment",
              icon: "Shield"
            },
            {
              title: "Test Cards",
              description: "Test card numbers for various scenarios",
              icon: "CreditCard"
            }
          ]
        },
        {
          title: "Code Examples",
          description: "Ready-to-use code snippets and samples",
          icon: "FileText",
          children: [
            {
              title: "JavaScript Examples",
              description: "Frontend integration examples",
              icon: "Globe"
            },
            {
              title: "Server-side Examples",
              description: "Backend integration patterns",
              icon: "Settings"
            }
          ]
        }
      ]
    },
    {
      title: "Compliance & Security",
      description: "Security standards, compliance, and data protection",
      icon: "Shield",
      children: [
        {
          title: "PCI DSS Compliance",
          description: "Payment Card Industry Data Security Standard",
          icon: "Shield",
          children: [
            {
              title: "Compliance Requirements",
              description: "Understand PCI DSS requirements",
              icon: "FileText"
            },
            {
              title: "Security Best Practices",
              description: "Implement security best practices",
              icon: "Lock"
            }
          ]
        },
        {
          title: "Data Protection",
          description: "GDPR and data privacy compliance",
          icon: "Lock",
          children: [
            {
              title: "Privacy Policy",
              description: "Data handling and privacy policies",
              icon: "FileText"
            },
            {
              title: "Data Retention",
              description: "Data storage and retention policies",
              icon: "Calendar"
            }
          ]
        }
      ]
    }
  ]
};