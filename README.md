# 🌍 AI-Driven Campus Sustainability & Smart Governance Architecture
### 🏆 Kaggle 5-Day AI Agents Intensive Capstone Project (Agents for Business / Agents for Good Track)

A production-grade, full-stack AI Agent architecture designed to solve real-world institutional challenges. This project implements a **Smart Campus Governance Dashboard** combined with an **Automated Budget Approval Pipeline**, fully demonstrating the core paradigms of Vibe Coding, secure execution, and Spec-Driven Development.

🔗 **Live Production Demo**: [Click Here to View the Dashboard](https://fjcu-sustainability.netlify.app/)

---

## 🚀 Core Agent Capabilities & Technical Architecture
This project proudly demonstrates **four core concepts** introduced throughout the Google & Kaggle Intensive course, surpassing the minimum competition requirement of three:

### 1. Multi-Agent Prompt Engineering & UI Prototype (Day 1)
* **Implementation**: Developed a responsive, interactive frontend dashboard (`index.html`) featuring real-time water telemetry, rainfall particle simulation, and predictive drainage data.
* **Engineering Standard**: Built with rigorous `try-catch` error boundaries to handle unstable non-deterministic AI text outputs, ensuring robust fallback renders.
* **Privacy Compliance**: 100% de-branded and strictly masked to protect organizational and sensitive metadata while maintaining high fidelity.

### 2. Model Context Protocol (MCP) Interoperability (Day 2)
* **Implementation**: Integrated an external knowledge engine via MCP (`mcp_config.json`), registering the `google-developer-knowledge` toolkit to bridge the gap between static LLM memory and dynamic production documentation.
* **Security Guard**: Hardcoded credentials are strictly prohibited. The configuration safely utilizes environment variable schemas to ensure no active keys are exposed to the public repository.

### 3. Automated Agent Skills & Code Linting (Day 3)
* **Implementation**: Employed the Agent Development Kit (ADK) to invoke high-order professional agent skills for static code analysis.
* **Artifact**: The comprehensive `LINT_REPORT.md` details advanced engineering solutions applied to resolve layout thrashing and optimize rendering pipelines from DOM Churn to GPU-accelerated operations.

### 4. Human-in-the-Loop (HITL) & Proactive Threat Scan (Day 4 & 5)
* **Implementation**: Engineered an asynchronous Node.js backend pipeline (`expense_agent_hitl.js`) to simulate zero-trust governance.
* **Triage Switch**: Implemented a threshold barrier where budgets less than or equal to 5,000 NTD are automatically processed by the agent, while requests greater than 5,000 NTD trigger an immediate hard stop, routing control to an authorized human administrator (`[👤 HUMAN INTERVENTION REQUIRED]`).
* **Spec-Driven Quality (SDD)**: Governed by standard Gherkin behavior files (`SPECIFICATION.md`) to treat code as disposable and business specifications as the absolute source of truth.

---

## 📁 Repository Structure
* 📄 `index.html` - De-branded high-fidelity dynamic dashboard & UI prototype.
* ⚙️ `mcp_config.json` - Safe MCP configuration with masked credentials.
* 🔍 `LINT_REPORT.md` - Technical code health and architectural performance report.
* 🤖 `expense_agent_hitl.js` - Secure backend workflow with automated threat scanner and HITL triage.
* 📋 `SPECIFICATION.md` - SDD Gherkin files validating behavior-driven development.

---

## 🛠️ How to Run the Secure Expense Simulation Locally
To test the Day 4/5 Human-in-the-loop and security threat scanner, execute the following command in your terminal (requires Node.js environment):
```bash
node expense_agent_hitl.js --auto
