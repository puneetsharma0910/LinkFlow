# LinkFlow

LinkFlow is a Next.js-based project that allows users to create a personal landing page with multiple links, a profile picture, and a description.

## Features
- Claim a unique handle.
- Add multiple links with custom text.
- Upload a profile picture via a URL.
- Add a description to personalize the page.
- Responsive and user-friendly UI.

## Technologies Used
- **Next.js 15**
- **React.js**
- **Tailwind CSS**
- **React Toastify** for notifications
- **fetch API** for API requests

## Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js** (>= 16)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/puneetsharma0910/LinkFlow.git
   ```

2. Navigate to the project directory:
   ```bash
   cd LinkFlow
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Project

To start the development server:
```bash
npm run dev
```

or

```bash
yarn dev
```

The application will be running at `http://localhost:3000/`

## API Endpoints

### `POST /api/add`
Used to store user-generated links, profile pictures, and descriptions.

**Request Body:**
```json
{
  "links": [{ "link": "https://example.com", "linktext": "Example" }],
  "handle": "your_handle",
  "pic": "https://example.com/image.jpg",
  "desc": "Your description here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Profile created successfully"
}
```

## How to View Submitted Data?
To view stored user data, implement an API route or database connection to fetch and display user-generated content. You can add a new API endpoint (`/api/get` for example) to retrieve stored data.

## Deployment

To deploy on **Vercel**, run:
```bash
vercel
```

Or manually deploy using GitHub Actions or other hosting services.

## Contributing
Feel free to fork the repository, make improvements, and submit pull requests!

