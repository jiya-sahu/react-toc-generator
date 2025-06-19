export const contentHeadings = [
  {
    level: 1,
    text: "Overview",
    description: `In today’s fast-paced digital world, managing distributed teams and keeping track of multiple projects can be overwhelming. This guide provides a comprehensive overview of how technology is solving these organizational challenges by offering centralized systems to streamline communication, task tracking, and resource allocation.`,
  },
  {
    level: 1,
    text: "Getting Started",
    children: [
      {
        level: 3,
        text: "Installation",
        description: `Installing the software requires Node.js and a modern package manager. Setup is straightforward with a single command line installation process, making it accessible even for those with minimal technical background.`,
      },
      {
        level: 3,
        text: "Project Structure",
        description: `The codebase follows a modular structure. Each major feature is encapsulated in its own folder, improving maintainability and scalability. This also enables easy onboarding for new developers.`,
      },
      {
        level: 3,
        text: "Environment Setup",
        description: `Environment variables are used to configure sensitive keys and deployment settings. These are loaded from a .env file to keep production and development environments isolated.`,
      },
    ],
  },
  {
    level: 1,
    text: "Core Features",
    children: [
      {
        level: 3,
        text: "Task Management",
        children: [
          {
            level: 4,
            text: "Creating Tasks",
            description: `Users can create tasks with titles, descriptions, due dates, and priority labels. Tasks can be grouped under categories or projects, making large workflows easy to break down.`,
          },
          {
            level: 4,
            text: "Tagging and Filtering",
            description: `Tasks can be tagged with custom labels, allowing filtering and sorting based on status, assignee, deadline, and priority. This enables project managers to quickly identify bottlenecks.`,
          },
        ],
      },
      {
        level: 3,
        text: "Collaboration Tools",
        children: [
          {
            level: 4,
            text: "Real-time Comments",
            description: `Comment threads are updated in real-time using WebSockets. This enables seamless discussions and feedback loops within tasks, reducing the need for external messaging platforms.`,
          },
          {
            level: 4,
            text: "User Roles & Permissions",
            description: `Roles such as Admin, Editor, and Viewer can be assigned to users to control access to specific sections of the application. This ensures security and organizational hierarchy.`,
          },
        ],
      },
      {
        level: 4,
        text: "Calendar Integration",
        description: `The platform integrates with Google Calendar and Outlook, allowing users to view task deadlines and meeting events in one unified view.`,
      },
    ],
  },
  {
    level: 1,
    text: "API Reference",
    children: [
      {
        level: 2,
        text: "Authentication API",
        description: `Supports OAuth 2.0 and JWT-based authentication. All endpoints require valid access tokens and follow RESTful standards.`,
      },
      {
        level: 2,
        text: "Tasks API",
        description: `Provides CRUD operations for managing tasks. Supports filtering, sorting, pagination, and bulk updates.`,
      },
      {
        level: 2,
        text: "Webhooks",
        description: `Webhooks allow integration with third-party services. They can be triggered on task creation, update, or deletion.`,
      },
    ],
  },
  {
    level: 1,
    text: "Deployment",
    children: [
      {
        level: 3,
        text: "Using Vercel",
        description: `Vercel is a serverless deployment platform. Simply push to GitHub and your app is deployed with CI/CD pipelines built-in.`,
      },
      {
        level: 3,
        text: "Custom Domain Setup",
        description: `You can map your own domain to the deployed application through DNS configuration. SSL certificates are auto-managed by Vercel.`,
      },
    ],
  },
  {
    level: 1,
    text: "FAQs",
    description: `Common questions about performance, security, licensing, and scalability are addressed to help users understand platform limitations and capabilities.`,
  },
  {
    level: 1,
    text: "Contact & Support",
    description: `For technical support or feature requests, users can reach out via the in-app chat or email. Premium users receive 24/7 priority support.`,
  },
];
