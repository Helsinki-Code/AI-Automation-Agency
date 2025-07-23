import React from 'react';

const BuildingFirstAIAgentPage = () => {
  return (
    <div className="prose prose-invert max-w-4xl mx-auto py-12 px-4">
      <h1>Building Your First AI Agent: A Complete Beginner's Guide</h1>
      <p>Welcome to the exciting world of AI agents! This comprehensive tutorial will guide you through building your first intelligent agent from scratch. Whether you're a Python developer looking to explore AI or a complete beginner in agent development, this guide provides everything you need to create, deploy, and maintain your own AI agent.</p>
      <p>By the end of this tutorial, you'll have built a functional conversational agent with memory capabilities, tool integration, and cloud deployment knowledge. Let's embark on this journey to create intelligent, autonomous systems that can think, remember, and act on behalf of users.</p>

      <h2>What Are AI Agents?</h2>
      <p>AI agents are autonomous software programs that can perceive their environment, make decisions, and take actions to achieve specific goals. Unlike traditional chatbots that simply respond to inputs, AI agents can:</p>
      <ul>
        <li><strong>Reason and Plan</strong>: Break down complex problems into manageable steps</li>
        <li><strong>Use Tools</strong>: Access external APIs, databases, and services</li>
        <li><strong>Remember Context</strong>: Maintain conversation history and user preferences</li>
        <li><strong>Learn and Adapt</strong>: Improve performance through interaction and feedback</li>
        <li><strong>Take Initiative</strong>: Proactively suggest actions or solutions</li>
      </ul>
      <p>Think of AI agents as digital assistants that don't just answer questions but actively help solve problems by thinking through solutions, gathering information, and executing tasks autonomously.</p>

      <h2>Prerequisites and Requirements</h2>
      <h3>Technical Requirements</h3>
      <ul>
        <li><strong>Python 3.8+</strong> installed on your system</li>
        <li><strong>Basic Python knowledge</strong>: Understanding of functions, classes, and modules</li>
        <li><strong>Command line familiarity</strong>: Ability to navigate terminal/command prompt</li>
        <li><strong>API key access</strong>: OpenAI account with API credits (starting at $5)</li>
        <li><strong>Text editor or IDE</strong>: VS Code, PyCharm, or similar development environment</li>
      </ul>

      <h3>Knowledge Prerequisites</h3>
      <ul>
        <li>Basic understanding of APIs and HTTP requests</li>
        <li>Familiarity with JSON data format</li>
        <li>Elementary knowledge of version control (Git) - helpful but not required</li>
        <li>Understanding of virtual environments in Python</li>
      </ul>

      <h3>Hardware Requirements</h3>
      <ul>
        <li><strong>Minimum</strong>: 4GB RAM, modern processor</li>
        <li><strong>Recommended</strong>: 8GB+ RAM for smooth development experience</li>
        <li>Stable internet connection for API calls and package installations</li>
      </ul>

      <h2>Choosing the Right Framework</h2>
      <p>Selecting the appropriate framework is crucial for your AI agent development success. Each framework offers different strengths and complexity levels.</p>
      <h3>Framework Recommendations for Beginners</h3>
      <p><strong>Start with LangChain if you:</strong></p>
      <ul>
        <li>Want extensive documentation and community support</li>
        <li>Plan to build complex, multi-step applications</li>
        <li>Need integration with many different services and databases</li>
        <li>Are comfortable with medium-complexity learning curves</li>
      </ul>
      <p><strong>Choose CrewAI if you:</strong></p>
      <ul>
        <li>Want to build multi-agent systems with defined roles</li>
        <li>Prefer quick setup and rapid prototyping</li>
        <li>Focus on collaborative agent workflows</li>
        <li>Are new to programming and want simpler abstractions</li>
      </ul>
      <p><strong>Consider AutoGen if you:</strong></p>
      <ul>
        <li>Need strong integration with Microsoft ecosystem</li>
        <li>Want to build conversational multi-agent systems</li>
        <li>Plan to incorporate human-in-the-loop workflows</li>
        <li>Have experience with research-oriented development</li>
      </ul>
      <p>For this tutorial, we'll primarily use <strong>LangChain</strong> due to its comprehensive documentation, mature ecosystem, and beginner-friendly resources, while also showing examples from other frameworks.</p>

      <h2>Environment Setup</h2>
      <p>Let's set up your development environment step by step.</p>
      <h3>Step 1: Create Project Directory</h3>
      <pre><code>
{`mkdir my-first-ai-agent
cd my-first-ai-agent`}
      </code></pre>

      <h3>Step 2: Set Up Virtual Environment</h3>
      <p>Creating an isolated environment prevents package conflicts:</p>
      <pre><code>
{`python -m venv ai_agent_env

# Activate virtual environment
# On macOS/Linux:
source ai_agent_env/bin/activate

# On Windows:
ai_agent_env\\Scripts\\activate`}
      </code></pre>

      <h3>Step 3: Install Dependencies</h3>
      <p>Run the setup script or install packages manually:</p>
      <pre><code>
{`# Using setup script (recommended)
chmod +x setup.sh
./setup.sh

# Or install manually
pip install --upgrade pip
pip install -r requirements.txt`}
      </code></pre>

      <h3>Step 4: Configure Environment Variables</h3>
      <p>Copy the template and add your API keys:</p>
      <pre><code>
{`cp .env.template .env
# Edit .env with your actual API keys`}
      </code></pre>
      <p>Your <code>.env</code> file should contain:</p>
      <pre><code>
{`OPENAI_API_KEY=sk-your-actual-openai-key-here
ANTHROPIC_API_KEY=sk-ant-your-anthropic-key-here`}
      </code></pre>

      <h2>Building Your First Simple Agent</h2>
      <p>Let's start with a basic conversational agent to understand core concepts.</p>
      <h3>Understanding the Agent Architecture</h3>
      <p>A basic AI agent consists of:</p>
      <ol>
        <li><strong>LLM Interface</strong>: Connection to language model</li>
        <li><strong>Memory System</strong>: Storage for conversation context</li>
        <li><strong>Tool Integration</strong>: Functions the agent can execute</li>
        <li><strong>Decision Logic</strong>: How the agent chooses actions</li>
        <li><strong>Response Generation</strong>: Creating meaningful outputs</li>
      </ol>

      <h3>Creating the Basic Agent</h3>
      <p>Here's our complete basic agent implementation:</p>
      <pre><code>
{`import openai
import os
from datetime import datetime
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class SimpleAIAgent:
    def __init__(self, model="gpt-3.5-turbo"):
        self.client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        self.model = model
        self.conversation_memory = []
        
    def add_to_memory(self, role, content):
        """Store conversation in memory"""
        self.conversation_memory.append({
            "role": role,
            "content": content,
            "timestamp": datetime.now().isoformat()
        })
        
        # Limit memory to last 20 messages
        if len(self.conversation_memory) > 20:
            self.conversation_memory = self.conversation_memory[-20:]
    
    def generate_response(self, user_input):
        """Generate AI response"""
        self.add_to_memory("user", user_input)
        
        # Prepare conversation context
        messages = [
            {"role": "system", "content": "You are a helpful AI assistant."}
        ]
        
        # Add conversation history
        for msg in self.conversation_memory:
            messages.append({
                "role": msg["role"], 
                "content": msg["content"]
            })
        
        try:
            response = self.client.chat.completions.create(
                model=self.model,
                messages=messages,
                temperature=0.7,
                max_tokens=500
            )
            
            assistant_response = response.choices[0].message.content
            self.add_to_memory("assistant", assistant_response)
            
            return assistant_response
            
        except Exception as e:
            return f"Error: {str(e)}"

# Usage
if __name__ == "__main__":
    agent = SimpleAIAgent()
    print("Agent: Hello! I'm your AI assistant. Type 'quit' to exit.")
    
    while True:
        user_input = input("You: ")
        if user_input.lower() in ['quit', 'exit']:
            break
        response = agent.generate_response(user_input)
        print(f"Agent: {response}")`}
      </code></pre>

      <h2>Adding Memory and Context Management</h2>
      <p>Memory is what transforms a simple chatbot into an intelligent agent. Let's explore different memory types and implementations.</p>
      <h3>Implementing Different Memory Types</h3>
      <pre><code>
{`from typing import Dict, List
import json

class AdvancedMemoryAgent:
    def __init__(self, api_key: str):
        self.client = openai.OpenAI(api_key=api_key)
        
        # Short-term memory: Recent conversation
        self.conversation_buffer = []
        
        # Long-term memory: Persistent user data
        self.user_profile = {
            "preferences": {},
            "personal_info": {},
            "interaction_history": []
        }
        
        # Episodic memory: Important events
        self.episodes = []
        
        # Semantic memory: Facts and knowledge
        self.knowledge_base = {}
    
    def add_short_term_memory(self, role: str, content: str):
        """Add to conversation buffer"""
        self.conversation_buffer.append({
            "role": role,
            "content": content,
            "timestamp": datetime.now().isoformat()
        })
        
        # Keep only recent messages
        if len(self.conversation_buffer) > 15:
            self.conversation_buffer = self.conversation_buffer[-15:]
    
    def save_long_term_memory(self, key: str, value: str, category: str = "preferences"):
        """Save persistent user information"""
        if category not in self.user_profile:
            self.user_profile[category] = {}
        
        self.user_profile[category][key] = {
            "value": value,
            "timestamp": datetime.now().isoformat()
        }
    
    def add_episode(self, event_description: str, importance: int = 5):
        """Store significant events"""
        if importance >= 7:  # Only store important episodes
            self.episodes.append({
                "event": event_description,
                "importance": importance,
                "timestamp": datetime.now().isoformat()
            })
            
            # Limit episodes to prevent overflow
            if len(self.episodes) > 50:
                # Keep most important episodes
                self.episodes = sorted(self.episodes, 
                                     key=lambda x: x["importance"], 
                                     reverse=True)[:50]
    
    def get_relevant_context(self, query: str) -> str:
        """Retrieve relevant information for current query"""
        context_parts = []
        
        # Add recent conversation
        if self.conversation_buffer:
            recent_msgs = self.conversation_buffer[-5:]
            context_parts.append("Recent conversation:")
            for msg in recent_msgs:
                context_parts.append(f"- {msg['role']}: {msg['content']}")
        
        # Add relevant user preferences
        if self.user_profile["preferences"]:
            context_parts.append("User preferences:")
            for key, data in self.user_profile["preferences"].items():
                context_parts.append(f"- {key}: {data['value']}")
        
        return "\\n".join(context_parts)`}
      </code></pre>

      <h3>Memory Management Best Practices</h3>
      <ol>
        <li><strong>Set Memory Limits</strong>: Prevent unlimited memory growth</li>
        <li><strong>Prioritize Information</strong>: Store important data longer</li>
        <li><strong>Regular Cleanup</strong>: Remove outdated or irrelevant information</li>
        <li><strong>Context Relevance</strong>: Only include pertinent memory in prompts</li>
        <li><strong>User Privacy</strong>: Implement data retention policies</li>
      </ol>

      <h2>Integrating External Tools and APIs</h2>
      <p>Tools extend your agent's capabilities beyond text generation. Here's how to add various integrations:</p>

      <h3>Web Search Tool</h3>
      <pre><code>
{`import requests
from googlesearch import search

class WebSearchTool:
    def __init__(self):
        self.name = "web_search"
        self.description = "Search the internet for current information"
    
    def search_web(self, query: str, num_results: int = 3) -> str:
        """Search the web and return formatted results"""
        try:
            results = []
            for url in search(query, num_results=num_results, stop=num_results):
                # Get page title and snippet
                try:
                    response = requests.get(url, timeout=5)
                    title = url  # Simplified - would normally parse HTML
                    results.append(f"- {title}: {url}")
                except:
                    results.append(f"- {url}")
            
            return f"Search results for '{query}':\\n" + "\\n".join(results)
        except Exception as e:
            return f"Search failed: {str(e)}"

# Weather API Tool
class WeatherTool:
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.base_url = "http://api.openweathermap.org/data/2.5/weather"
    
    def get_weather(self, city: str) -> str:
        """Get current weather for a city"""
        try:
            params = {
                "q": city,
                "appid": self.api_key,
                "units": "metric"
            }
            
            response = requests.get(self.base_url, params=params)
            data = response.json()
            
            if response.status_code == 200:
                temp = data["main"]["temp"]
                desc = data["weather"][0]["description"]
                return f"Weather in {city}: {temp}°C, {desc}"
            else:
                return f"Could not get weather for {city}"
        except Exception as e:
            return f"Weather API error: {str(e)}"`}
      </code></pre>

      <h3>Tool Integration Pattern</h3>
      <pre><code>
{`class ToolIntegratedAgent:
    def __init__(self, api_key: str):
        self.client = openai.OpenAI(api_key=api_key)
        self.tools = {
            "web_search": WebSearchTool(),
            "weather": WeatherTool(os.getenv("WEATHER_API_KEY"))
        }
    
    def detect_tool_needed(self, user_input: str) -> str:
        """Simple tool detection logic"""
        input_lower = user_input.lower()
        
        if any(word in input_lower for word in ["weather", "temperature", "forecast"]):
            return "weather"
        elif any(word in input_lower for word in ["search", "find", "lookup", "what is"]):
            return "web_search"
        else:
            return None
    
    def execute_tool(self, tool_name: str, user_input: str) -> str:
        """Execute the appropriate tool"""
        if tool_name == "weather":
            # Extract city name (simplified)
            city = user_input.split("weather in")[-1].strip().split()[0]
            return self.tools["weather"].get_weather(city)
        
        elif tool_name == "web_search":
            return self.tools["web_search"].search_web(user_input)
        
        return "Tool not found"`}
      </code></pre>

      <h2>Testing and Debugging Techniques</h2>
      <p>Proper testing ensures your agent behaves reliably and safely.</p>

      <h3>Unit Testing Framework</h3>
      <pre><code>
{`import pytest
from unittest.mock import Mock, patch

class TestAIAgent:
    def setup_method(self):
        """Setup test agent"""
        self.agent = SimpleAIAgent()
    
    def test_memory_addition(self):
        """Test memory management"""
        self.agent.add_to_memory("user", "Hello")
        assert len(self.agent.conversation_memory) == 1
        assert self.agent.conversation_memory[0]["content"] == "Hello"
    
    def test_memory_limit(self):
        """Test memory doesn't exceed limit"""
        # Add many messages
        for i in range(25):
            self.agent.add_to_memory("user", f"Message {i}")
        
        # Should only keep last 20
        assert len(self.agent.conversation_memory) == 20`}
      </code></pre>

      <h3>Logging and Debugging</h3>
      <pre><code>
{`import logging
import random

class DebuggingAgent:
    def __init__(self, debug_mode: bool = False):
        self.debug_mode = debug_mode
        self.logger = logging.getLogger(__name__)
        if self.debug_mode:
            logging.basicConfig(level=logging.INFO)
    
    def generate_response(self, user_input: str) -> str:
        if self.debug_mode:
            self.logger.info(f"User input: {user_input}")
        
        try:
            # ... response generation logic ...
            response = "This is a response."
            if self.debug_mode:
                self.logger.info(f"Generated response: {response[:100]}...")
            
            return response
            
        except Exception as e:
            self.logger.error(f"Error generating response: {str(e)}")
            return self._get_fallback_response()
    
    def _get_fallback_response(self) -> str:
        """Provide fallback when main response fails"""
        fallbacks = [
            "I'm having trouble processing that right now. Could you try rephrasing?",
            "Sorry, I encountered an issue. Let me try to help you differently.",
            "I'm experiencing technical difficulties. Is there something else I can help with?"
        ]
        return random.choice(fallbacks)`}
      </code></pre>

      <h2>Error Handling and Fallback Strategies</h2>
      <p>Robust error handling prevents your agent from breaking during unexpected situations.</p>

      <h3>Comprehensive Error Handling</h3>
      <pre><code>
{`import time
from typing import Optional
from enum import Enum

class ErrorType(Enum):
    API_LIMIT = "api_limit"
    NETWORK_ERROR = "network_error"
    INVALID_INPUT = "invalid_input"
    TOOL_ERROR = "tool_error"

class RobustAgent:
    def __init__(self, api_key: str):
        self.client = openai.OpenAI(api_key=api_key)
        self.max_retries = 3
        self.retry_delay = 1
    
    def generate_response_with_retry(self, user_input: str) -> str:
        """Generate response with retry logic"""
        for attempt in range(self.max_retries):
            try:
                return self._generate_response(user_input)
                
            except openai.RateLimitError:
                if attempt < self.max_retries - 1:
                    time.sleep(self.retry_delay * (2 ** attempt))
                else:
                    return self.get_fallback_response(ErrorType.API_LIMIT)
            except Exception as e:
                return self.get_fallback_response(ErrorType.NETWORK_ERROR)

    def get_fallback_response(self, error_type: ErrorType) -> str:
        """Provide appropriate fallback for each error type"""
        error_messages = {
            ErrorType.API_LIMIT: "I'm currently experiencing high demand. Please try again in a moment.",
            ErrorType.NETWORK_ERROR: "I'm having connectivity issues. Please check your connection and try again.",
            ErrorType.INVALID_INPUT: "I didn't quite understand that. Could you please rephrase your question?",
            ErrorType.TOOL_ERROR: "I encountered an issue with my tools. Let me try a different approach."
        }
        
        return error_messages.get(error_type, "I encountered an unexpected issue. Please try again.")`}
      </code></pre>

      <h2>Basic Cloud Deployment</h2>
      <p>Deploy your agent to make it accessible from anywhere.</p>

      <h3>Docker Containerization</h3>
      <pre><code>
{`# Dockerfile
FROM python:3.9-slim

WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Expose port
EXPOSE 8000

# Run application
CMD ["python", "app.py"]`}
      </code></pre>

      <h3>Simple Flask Web Interface</h3>
      <pre><code>
{`from flask import Flask, request, jsonify, render_template
import os

app = Flask(__name__)
agent = SimpleAIAgent(api_key=os.getenv("OPENAI_API_KEY"))

@app.route('/')
def home():
    return render_template('chat.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    if not user_input:
        return jsonify({'error': 'No message provided'}), 400
    
    try:
        response = agent.generate_response(user_input)
        return jsonify({'response': response})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=False)`}
      </code></pre>

      <h3>Cloud Platform Deployment</h3>
      <p><strong>Heroku Deployment:</strong></p>
      <pre><code>
{`# Install Heroku CLI
# Create Procfile
echo "web: python app.py" > Procfile

# Deploy
git init
git add .
git commit -m "Initial commit"
heroku create your-agent-app
heroku config:set OPENAI_API_KEY=your_key_here
git push heroku main`}
      </code></pre>

      <p><strong>AWS Lambda Deployment:</strong></p>
      <pre><code>
{`import json
import boto3

def lambda_handler(event, context):
    # Extract message from API Gateway event
    body = json.loads(event['body'])
    user_input = body.get('message')
    
    # Initialize agent
    agent = SimpleAIAgent()
    response = agent.generate_response(user_input)
    
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        'body': json.dumps({'response': response})
    }`}
      </code></pre>

      <h2>Monitoring and Logging</h2>
      <p>Track your agent's performance and identify issues proactively.</p>

      <h3>Advanced Logging Setup</h3>
      <pre><code>
{`import logging
import json
from datetime import datetime
from pathlib import Path

class AgentLogger:
    def __init__(self, log_dir: str = "logs"):
        self.log_dir = Path(log_dir)
        self.log_dir.mkdir(exist_ok=True)
        
        # Setup different log levels
        self.setup_loggers()
    
    def setup_loggers(self):
        # Main application logger
        self.app_logger = logging.getLogger('agent_app')
        self.app_logger.setLevel(logging.INFO)
        
        # Conversation logger
        self.conv_logger = logging.getLogger('conversations')
        self.conv_logger.setLevel(logging.INFO)
        
        # Error logger
        self.error_logger = logging.getLogger('errors')
        self.error_logger.setLevel(logging.ERROR)
        
        # Create handlers
        app_handler = logging.FileHandler(self.log_dir / 'app.log')
        conv_handler = logging.FileHandler(self.log_dir / 'conversations.log')
        error_handler = logging.FileHandler(self.log_dir / 'errors.log')
        
        # Create formatters
        formatter = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        )
        
        app_handler.setFormatter(formatter)
        conv_handler.setFormatter(formatter)
        error_handler.setFormatter(formatter)
        
        # Add handlers
        self.app_logger.addHandler(app_handler)
        self.conv_logger.addHandler(conv_handler)
        self.error_logger.addHandler(error_handler)
    
    def log_conversation(self, user_input: str, agent_response: str, 
                        user_id: str = None):
        """Log conversation for analysis"""
        conv_data = {
            'timestamp': datetime.now().isoformat(),
            'user_id': user_id,
            'user_input': user_input,
            'agent_response': agent_response,
            'input_length': len(user_input),
            'response_length': len(agent_response)
        }
        
        self.conv_logger.info(json.dumps(conv_data))
    
    def log_error(self, error: Exception, context: dict = None):
        """Log detailed error information"""
        error_data = {
            'timestamp': datetime.now().isoformat(),
            'error_type': type(error).__name__,
            'error_message': str(error),
            'context': context or {}
        }
        
        self.error_logger.error(json.dumps(error_data))`}
      </code></pre>

      <h3>Performance Monitoring</h3>
      <pre><code>
{`import time
import psutil
from functools import wraps

class PerformanceMonitor:
    def __init__(self):
        self.metrics = {
            'response_times': [],
            'memory_usage': [],
            'api_calls': 0,
            'errors': 0
        }
    
    def time_function(self, func):
        """Decorator to time function execution"""
        @wraps(func)
        def wrapper(*args, **kwargs):
            start_time = time.time()
            try:
                result = func(*args, **kwargs)
                execution_time = time.time() - start_time
                self.metrics['response_times'].append(execution_time)
                return result
            except Exception as e:
                self.metrics['errors'] += 1
                raise
        return wrapper
    
    def log_memory_usage(self):
        """Log current memory usage"""
        memory = psutil.virtual_memory()
        self.metrics['memory_usage'].append({
            'timestamp': datetime.now().isoformat(),
            'used_mb': memory.used / (1024 * 1024),
            'percent': memory.percent
        })
    
    def get_average_response_time(self) -> float:
        """Calculate average response time"""
        if not self.metrics['response_times']:
            return 0.0
        return sum(self.metrics['response_times']) / len(self.metrics['response_times'])`}
      </code></pre>

      <h2>Scaling Considerations for Beginners</h2>
      <p>As your agent grows, consider these scaling strategies:</p>

      <h3>Database Integration</h3>
      <pre><code>
{`import sqlite3
from typing import List, Dict

class DatabaseManager:
    def __init__(self, db_path: str = "agent_data.db"):
        self.db_path = db_path
        self.init_database()
    
    def init_database(self):
        """Initialize database tables"""
        with sqlite3.connect(self.db_path) as conn:
            conn.execute("""
                CREATE TABLE IF NOT EXISTS conversations (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    user_id TEXT,
                    timestamp TEXT,
                    user_input TEXT,
                    agent_response TEXT
                )
            """)
            
            conn.execute("""
                CREATE TABLE IF NOT EXISTS user_preferences (
                    user_id TEXT,
                    key TEXT,
                    value TEXT,
                    timestamp TEXT,
                    PRIMARY KEY (user_id, key)
                )
            """)
    
    def save_conversation(self, user_id: str, user_input: str, 
                         agent_response: str):
        """Save conversation to database"""
        with sqlite3.connect(self.db_path) as conn:
            conn.execute(
                "INSERT INTO conversations (user_id, timestamp, user_input, agent_response) VALUES (?, ?, ?, ?)",
                (user_id, datetime.now().isoformat(), user_input, agent_response)
            )
    
    def get_user_history(self, user_id: str, limit: int = 10) -> List[Dict]:
        """Retrieve user conversation history"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.execute(
                "SELECT timestamp, user_input, agent_response FROM conversations WHERE user_id = ? ORDER BY id DESC LIMIT ?",
                (user_id, limit)
            )
            return [{'timestamp': row[0], 'user_input': row[1], 'agent_response': row[2]} 
                   for row in cursor.fetchall()]`}
      </code></pre>

      <h3>Load Balancing and Caching</h3>
      <pre><code>
{`import redis
from typing import Optional

class CacheManager:
    def __init__(self, redis_url: str = "redis://localhost:6379"):
        self.redis_client = redis.from_url(redis_url)
        self.default_ttl = 3600  # 1 hour
    
    def get_cached_response(self, query_hash: str) -> Optional[str]:
        """Get cached response for similar query"""
        return self.redis_client.get(f"response:{query_hash}")
    
    def cache_response(self, query_hash: str, response: str, ttl: int = None):
        """Cache response for future use"""
        self.redis_client.setex(
            f"response:{query_hash}", 
            ttl or self.default_ttl, 
            response
        )
    
    def invalidate_cache(self, pattern: str = "response:*"):
        """Clear cached responses"""
        for key in self.redis_client.scan_iter(match=pattern):
            self.redis_client.delete(key)`}
      </code></pre>

      <h2>Common Pitfalls and How to Avoid Them</h2>
      <p>Learn from common mistakes to build better agents:</p>

      <h3>1. Context Window Management</h3>
      <p><strong>Problem</strong>: Hitting token limits with long conversations</p>
      <p><strong>Solution</strong>: Implement conversation summarization and memory pruning</p>
      <pre><code>
{`def summarize_conversation(self, messages: List[Dict]) -> str:
    """Summarize conversation when context gets too long"""
    if len(messages) > 15:
        # Create summary of older messages
        old_messages = messages[:-10]  # All but last 10
        summary_prompt = f"Summarize this conversation: {old_messages}"
        summary = self._call_llm(summary_prompt)
        
        # Keep summary + recent messages
        return [{"role": "system", "content": f"Previous conversation summary: {summary}"}] + messages[-10:]
    return messages`}
      </code></pre>

      <h3>2. API Rate Limiting</h3>
      <p><strong>Problem</strong>: Exceeding API rate limits</p>
      <p><strong>Solution</strong>: Implement exponential backoff and request queuing</p>
      <pre><code>
{`import asyncio
from asyncio import Queue

class RateLimitedAgent:
    def __init__(self, requests_per_minute: int = 60):
        self.request_queue = Queue()
        self.requests_per_minute = requests_per_minute
        self.request_interval = 60 / requests_per_minute
        
    async def process_request_queue(self):
        """Process requests at controlled rate"""
        while True:
            request = await self.request_queue.get()
            try:
                response = await self._make_api_call(request)
                request['callback'](response)
            except Exception as e:
                request['error_callback'](e)
            finally:
                await asyncio.sleep(self.request_interval)`}
      </code></pre>

      <h3>3. Memory Leaks</h3>
      <p><strong>Problem</strong>: Unbounded memory growth</p>
      <p><strong>Solution</strong>: Implement memory limits and cleanup routines</p>
      <pre><code>
{`class MemoryEfficientAgent:
    def __init__(self, max_memory_items: int = 1000):
        self.max_memory_items = max_memory_items
        self.memory = []
    
    def cleanup_memory(self):
        """Remove old or less important memories"""
        if len(self.memory) > self.max_memory_items:
            # Keep most recent and most important
            self.memory = sorted(
                self.memory, 
                key=lambda x: (x.get('importance', 0), x['timestamp'])
            )[-self.max_memory_items:]`}
      </code></pre>

      <h3>4. Error Recovery</h3>
      <p><strong>Problem</strong>: Agent becomes unusable after errors</p>
      <p><strong>Solution</strong>: Implement graceful degradation</p>
      <pre><code>
{`def safe_generate_response(self, user_input: str) -> str:
    """Generate response with multiple fallback layers"""
    try:
        # Primary: Full AI response
        return self.generate_full_response(user_input)
    except openai.RateLimitError:
        # Fallback 1: Simple template responses
        return self.generate_template_response(user_input)
    except Exception:
        # Fallback 2: Static helpful message
        return "I'm experiencing technical difficulties. Please try again later."`}
      </code></pre>

      <h2>Advanced Topics and Next Steps</h2>
      <p>Once you've mastered the basics, explore these advanced concepts:</p>

      <h3>Multi-Agent Systems</h3>
      <p>Build teams of specialized agents that collaborate:</p>
      <pre><code>
{`class AgentTeam:
    def __init__(self):
        self.agents = {
            'researcher': ResearchAgent(),
            'writer': WriterAgent(),
            'reviewer': ReviewerAgent()
        }
    
    def collaborative_task(self, task: str) -> str:
        # Research phase
        research = self.agents['researcher'].research(task)
        
        # Writing phase
        draft = self.agents['writer'].write(research)
        
        # Review phase
        final_result = self.agents['reviewer'].review(draft)
        
        return final_result`}
      </code></pre>

      <h3>Advanced Memory Systems</h3>
      <p>Implement sophisticated memory with vector databases:</p>
      <pre><code>
{`from sentence_transformers import SentenceTransformer
import chromadb

class VectorMemoryAgent:
    def __init__(self):
        self.encoder = SentenceTransformer('all-MiniLM-L6-v2')
        self.chroma_client = chromadb.Client()
        self.collection = self.chroma_client.create_collection("agent_memory")
    
    def store_memory(self, text: str, metadata: dict):
        """Store memory with vector embedding"""
        embedding = self.encoder.encode([text])
        self.collection.add(
            embeddings=embedding.tolist(),
            documents=[text],
            metadatas=[metadata],
            ids=[f"mem_{len(self.collection.get()['ids'])}"]
        )
    
    def retrieve_relevant_memories(self, query: str, n_results: int = 5):
        """Retrieve memories similar to query"""
        query_embedding = self.encoder.encode([query])
        results = self.collection.query(
            query_embeddings=query_embedding.tolist(),
            n_results=n_results
        )
        return results`}
      </code></pre>

      <h3>Custom Tool Development</h3>
      <p>Create domain-specific tools for your agent:</p>
      <pre><code>
{`class CustomToolAgent:
    def __init__(self):
        self.tools = {}
        self.register_default_tools()
    
    def register_tool(self, name: str, func: callable, description: str):
        """Register a new tool"""
        self.tools[name] = {
            'function': func,
            'description': description
        }
    
    def register_default_tools(self):
        """Register built-in tools"""
        self.register_tool(
            'calculate',
            self.calculate,
            'Perform mathematical calculations'
        )
        
        self.register_tool(
            'email_send',
            self.send_email,
            'Send emails to specified recipients'
        )
    
    def calculate(self, expression: str) -> str:
        """Safe calculator tool"""
        try:
            # Use safe evaluation
            result = eval(expression, {"__builtins__": {}})
            return f"Result: {result}"
        except:
            return "Invalid mathematical expression"`}
      </code></pre>

      <h2>Troubleshooting Guide</h2>
      <h3>Common Issues and Solutions</h3>
      <p><strong>Issue: Agent gives inconsistent responses</strong></p>
      <ul>
        <li><strong>Cause</strong>: Temperature setting too high or inconsistent prompts</li>
        <li><strong>Solution</strong>: Lower temperature (0.1-0.3) and standardize system prompts</li>
      </ul>
      <p><strong>Issue: Slow response times</strong></p>
      <ul>
        <li><strong>Cause</strong>: Large context windows or complex tool chains</li>
        <li><strong>Solution</strong>: Implement context summarization and optimize tool selection</li>
      </ul>
      <p><strong>Issue: High API costs</strong></p>
      <ul>
        <li><strong>Cause</strong>: Inefficient prompt design or excessive API calls</li>
        <li><strong>Solution</strong>: Use prompt caching, implement response caching, optimize context length</li>
      </ul>
      <p><strong>Issue: Memory issues</strong></p>
      <ul>
        <li><strong>Cause</strong>: Unbounded conversation storage</li>
        <li><strong>Solution</strong>: Implement memory limits and cleanup routines</li>
      </ul>
      <p><strong>Issue: Agent refuses to work</strong></p>
      <ul>
        <li><strong>Cause</strong>: API key issues or rate limiting</li>
        <li><strong>Solution</strong>: Verify credentials, implement retry logic with exponential backoff</li>
      </ul>

      <h3>Debugging Tools</h3>
      <pre><code>
{`import json
from datetime import datetime

class AgentDebugger:
    def __init__(self, agent):
        self.agent = agent
        self.debug_log = []
    
    def debug_conversation(self, user_input: str) -> dict:
        """Debug a single conversation turn"""
        debug_info = {
            'timestamp': datetime.now().isoformat(),
            'input': user_input,
            'memory_size': len(self.agent.conversation_memory),
            'context_length': self._calculate_context_length(),
            'tools_available': list(self.agent.tools.keys()),
            'errors': []
        }
        
        try:
            response = self.agent.generate_response(user_input)
            debug_info['response'] = response
            debug_info['success'] = True
        except Exception as e:
            debug_info['error'] = str(e)
            debug_info['success'] = False
        
        self.debug_log.append(debug_info)
        return debug_info
    
    def export_debug_log(self, filename: str = 'debug_log.json'):
        """Export debug information for analysis"""
        with open(filename, 'w') as f:
            json.dump(self.debug_log, f, indent=2)`}
      </code></pre>

      <h2>Community Resources and Further Learning</h2>
      <h3>Essential Learning Resources</h3>
      <p><strong>Official Documentation:</strong></p>
      <ul>
        <li><strong>LangChain</strong>: https://python.langchain.com/</li>
        <li><strong>OpenAI API</strong>: https://platform.openai.com/docs</li>
        <li><strong>CrewAI</strong>: https://docs.crewai.com/</li>
        <li><strong>AutoGen</strong>: https://microsoft.github.io/autogen/</li>
      </ul>

      <p><strong>Community Forums:</strong></p>
      <ul>
        <li><strong>Discord Communities</strong>: LangChain, CrewAI, and AutoGen official servers</li>
        <li><strong>Reddit</strong>: r/MachineLearning, r/artificial, r/LangChain</li>
        <li><strong>Stack Overflow</strong>: Use tags <code>langchain</code>, <code>openai-api</code>, <code>ai-agents</code></li>
      </ul>

      <p><strong>Video Learning:</strong></p>
      <ul>
        <li><strong>YouTube Channels</strong>:
          <ul>
            <li>"AI Explained" for conceptual understanding</li>
            <li>"Code with AI" for implementation tutorials</li>
            <li>"LangChain Official" for framework updates</li>
          </ul>
        </li>
      </ul>

      <p><strong>Books and Courses:</strong></p>
      <ul>
        <li>"Building LLM Apps" by Harrison Chase (LangChain creator)</li>
        <li>"AI Agents in Python" (various online courses)</li>
        <li>"Hands-on Large Language Models" by Jay Alammar</li>
      </ul>

      <h3>Practice Projects</h3>
      <p><strong>Beginner Projects:</strong></p>
      <ol>
        <li><strong>Personal Assistant</strong>: Schedule management and reminders</li>
        <li><strong>FAQ Bot</strong>: Customer service for specific domain</li>
        <li><strong>Research Assistant</strong>: Web search and summarization</li>
        <li><strong>Code Helper</strong>: Programming Q&A with code execution</li>
      </ol>

      <p><strong>Intermediate Projects:</strong></p>
      <ol>
        <li><strong>Multi-Agent News Analyzer</strong>: Research, summarize, fact-check</li>
        <li><strong>Smart Home Controller</strong>: IoT device integration</li>
        <li><strong>Content Creator</strong>: Blog posts, social media content</li>
        <li><strong>Data Analyst Agent</strong>: Query databases, generate reports</li>
      </ol>

      <p><strong>Advanced Projects:</strong></p>
      <ol>
        <li><strong>Autonomous Trading Bot</strong>: Market analysis and trading</li>
        <li><strong>Virtual Therapist</strong>: Mental health conversation support</li>
        <li><strong>Legal Research Assistant</strong>: Case law analysis</li>
        <li><strong>Scientific Research Agent</strong>: Paper analysis and hypothesis generation</li>
      </ol>

      <h3>Contributing to Open Source</h3>
      <p><strong>Ways to Get Involved:</strong></p>
      <ul>
        <li><strong>Bug Reports</strong>: Test frameworks and report issues</li>
        <li><strong>Documentation</strong>: Improve tutorials and examples</li>
        <li><strong>Feature Requests</strong>: Suggest new capabilities</li>
        <li><strong>Code Contributions</strong>: Fix bugs or add features</li>
      </ul>

      <p><strong>Starting Points:</strong></p>
      <ul>
        <li>Look for "good first issue" labels on GitHub</li>
        <li>Join framework Discord servers</li>
        <li>Attend virtual meetups and conferences</li>
        <li>Share your projects and get feedback</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Congratulations! You've completed a comprehensive journey through AI agent development. You now have the knowledge and tools to:</p>
      <ul>
        <li>Set up professional development environments</li>
        <li>Choose appropriate frameworks for your projects</li>
        <li>Build conversational agents with memory capabilities</li>
        <li>Integrate external tools and APIs</li>
        <li>Implement robust error handling and testing</li>
        <li>Deploy agents to cloud platforms</li>
        <li>Monitor and scale your applications</li>
      </ul>

      <h3>Key Takeaways:</h3>
      <ol>
        <li><strong>Start Simple</strong>: Begin with basic conversational agents before adding complexity</li>
        <li><strong>Plan for Scale</strong>: Consider memory management, rate limiting, and error handling from the start</li>
        <li><strong>Test Thoroughly</strong>: Implement comprehensive testing and monitoring</li>
        <li><strong>Stay Updated</strong>: AI agent frameworks evolve rapidly - keep learning</li>
        <li><strong>Join Communities</strong>: Connect with other developers for support and collaboration</li>
      </ol>

      <h3>Your Next Steps:</h3>
      <ol>
        <li>Build the basic agent from this tutorial</li>
        <li>Choose one advanced feature to implement</li>
        <li>Deploy your agent to a cloud platform</li>
        <li>Share your project with the community</li>
        <li>Start planning your next, more ambitious agent project</li>
      </ol>
      <p>The world of AI agents is expanding rapidly, with new capabilities and use cases emerging constantly. By mastering these foundational concepts, you're well-positioned to build innovative, intelligent systems that can truly augment human capabilities.</p>
      <p>Remember: the best way to learn is by building. Start with simple projects, iterate based on feedback, and gradually increase complexity. Your first agent might be simple, but each iteration will teach you valuable lessons that compound into expertise.</p>
      <p>Welcome to the exciting world of AI agent development! The future is autonomous, and you now have the skills to help build it.</p>
    </div>
  );
};

export default BuildingFirstAIAgentPage;
