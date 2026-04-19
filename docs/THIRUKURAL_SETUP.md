# 🪔 Thirukural Daily Routine - Setup Guide

## Overview
This application uses **Claude AI** to provide personalized Thirukural recommendations based on your daily routine description. It's powered by a Python backend server that connects to Anthropic's API.

## Prerequisites
- Python 3.7+
- Anthropic API key (free tier available at https://console.anthropic.com)

## Quick Start

### 1. Get an Anthropic API Key
1. Visit https://console.anthropic.com
2. Sign up or log in
3. Generate an API key in the dashboard
4. Copy your key (format: `sk-ant-...`)

### 2. Set Up Backend Server

**Option A: Using Environment Variable (Recommended)**
```bash
# macOS/Linux
export ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx
python server.py

# Windows PowerShell
$env:ANTHROPIC_API_KEY="sk-ant-xxxxxxxxxxxxx"
python server.py

# Windows CMD
set ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx
python server.py
```

**Option B: Edit server.py Directly**
1. Open `server.py`
2. Find line 14: `API_KEY = os.environ.get("ANTHROPIC_API_KEY", "")`
3. Replace with: `API_KEY = "sk-ant-xxxxxxxxxxxxx"`
4. Run: `python server.py`

### 3. Open the App
- Open your browser to: **http://localhost:5000**
- The HTML file will be served automatically

## How It Works

### Primary Flow (With Server)
1. Describe your daily routine (e.g., "I wake up early, exercise, work on coding projects")
2. Click "Find Thirukurals"
3. Claude AI analyzes your routine and finds 3 relevant kurals
4. Each kural shows:
   - **Kural Number** (1-1330 from Thirukkural)
   - **Tamil Text** (original couplet)
   - **English Translation**
   - **Connection** (how it relates to your routine)

### Fallback Flow (If Server Unavailable)
- If the server is down, the app automatically uses a curated database
- Matches your routine keywords to pre-selected kurals
- Always gives you meaningful wisdom

## Features

✅ **AI-Powered Matching** - Claude understands context and themes  
✅ **Real Tamil Text** - Original kurals in Tamil script  
✅ **Meaningful Connections** - Explains how each kural relates to YOU  
✅ **Simple Interface** - Clean, distraction-free design  
✅ **Fallback Support** - Works even if API is down  

## Troubleshooting

### "Server Connection Error"
- Make sure `server.py` is running: `python server.py`
- Check backend is at: `http://localhost:5000/api/thirukural`
- Try refreshing the page

### "API Key Error"
- Verify your Anthropic API key is set correctly
- Check console (F12) for detailed error message
- Ensure key starts with `sk-ant-`

### App Still Works With Fallback
- Static kural database is always available
- Keyword matching works without any API

## API Response Example

When you submit a routine like "I work in healthcare helping patients", Claude AI returns:

```json
{
  "kurals": [
    {
      "number": 212,
      "chapter": "On Compassion",
      "tamil": "...",
      "english": "...",
      "connection": "This kural teaches compassion in service..."
    }
  ]
}
```

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (client-side)
- **Backend**: Python with HTTP server
- **AI**: Anthropic Claude API
- **Hosting**: Localhost (easily deployable to cloud)

## Tips for Best Results

1. **Be Specific**: Instead of "working", say "building a mobile app"
2. **Mention Activities**: Include your main daily acts (teaching, caring, creating)
3. **Describe Challenges**: Share what you're struggling with
4. **Include Values**: Mention what matters to you (family, learning, service)

Example good routine:
> "I wake at 6am, meditate, then work as a teacher. I try to inspire my students and be patient with their challenges. In the evening, I spend time with family."

## Files

- `thirukural_routine.html` - Main app (open in browser via server)
- `server.py` - Backend server (run with Python)
- `THIRUKURAL_SETUP.md` - This guide

## Questions?

- Check browser console (F12) for detailed logs
- Look at `server.py` output for API debugging
- Verify internet connection for Claude API calls

---

**அறிவு மலை** - "Knowledge is a mountain"  
May the wisdom of Thiruvalluvar guide your journey! 🙏
