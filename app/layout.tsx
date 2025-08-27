import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "Voice-to-Visual Programming Interface",
    "one_liner": "Create interactive visual programming flowcharts using only voice commands.",
    "why_now": "The rise of no-code platforms makes programming accessible; voice adds another layer of accessibility.",
    "novel_mechanism": "Integrates speech recognition with a visual programming backend to create instant flowcharts.",
    "ai_stack": [
      "GPT",
      "Speech",
      "RAG"
    ],
    "edge_use_cases": [
      "Non-developers creating applications",
      "Teachers demonstrating coding concepts verbally"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Voice command recognition",
        "Flowchart rendering",
        "Basic code export"
      ],
      "tools": [
        "React",
        "Firebase",
        "SpeechRecognition API"
      ],
      "data_bootstrap": [
        "public dataset for coding concepts",
        "synaptic templates via LLM"
      ],
      "risk": [
        "limited voice recognition accuracy",
        "user adoption hurdles"
      ],
      "mitigation": [
        "iterative feedback loops with demo users",
        "tutorials for new users"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Seamless voice command experience",
        "Live coding demo"
      ],
      "channels": [
        "ProductHunt",
        "Reddit",
        "Discord"
      ],
      "pricing": {
        "free": "Basic features",
        "pro": "$15/month for advanced features",
        "business": "$100/month for team collaboration"
      }
    },
    "moat": [
      "community-driven tutorials",
      "integrations with existing no-code tools",
      "user-generated templates"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 6,
      "defensibility": 7
    },
    "total_score": 28,
    "reasoning": "Combining voice input with visual programming creates a unique entry point that bypasses traditional coding, appealing to a broader audience."
  },
  {
    "title": "Voice Command Debugger",
    "one_liner": "Debug your code using voice commands that describe the issues.",
    "why_now": "Increased complexity in coding demands new tools to simplify debugging.",
    "novel_mechanism": "Utilizes NLP to interpret voice descriptions into actionable debugging steps.",
    "ai_stack": [
      "GPT",
      "Speech",
      "Agents"
    ],
    "edge_use_cases": [
      "Developers looking for rapid debugging assistance",
      "Students learning to code and debug verbally"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Voice input for error messages",
        "Simple code inspection",
        "Suggestions based on feedback"
      ],
      "tools": [
        "Node.js",
        "TensorFlow.js",
        "Web Speech API"
      ],
      "data_bootstrap": [
        "open source code repositories for error patterns",
        "synthetic error generation via LLM"
      ],
      "risk": [
        "complex technical jargon misinterpretation",
        "overpromising debugging accuracy"
      ],
      "mitigation": [
        "clear language simplification guidelines",
        "user feedback mechanisms for refinement"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Voice-driven debugging revolution",
        "Impressive debugging case studies"
      ],
      "channels": [
        "GitHub",
        "LinkedIn",
        "YouTube"
      ],
      "pricing": {
        "free": "Limited debugging features",
        "pro": "$20/month for full functionality",
        "business": "$150/month for team access"
      }
    },
    "moat": [
      "Partnerships with coding bootcamps",
      "User-driven feedback loops leading to continuous improvement",
      "Integration with popular IDEs"
    ],
    "scores": {
      "novelty": 7,
      "72h_feasibility": 8,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 28,
    "reasoning": "Offering a completely new method of interaction with debugging processes could appeal to less experienced developers and improve efficiency in troubleshooting."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}