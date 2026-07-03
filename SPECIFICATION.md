# 📋 Day 5: Spec-Driven Development (SDD) Behavior Specification

This specification uses the standard Gherkin syntax (Given/When/Then) as the absolute source of truth to govern the behavior of the Campus Sustainability & Smart Governance Agent.

---

## 🌧️ Feature 1: Dynamic Rainfall & Water Level Simulation
**As a** Campus Sustainability Director,  
**I want** the Dashboard to accurately simulate weather impacts on campus infrastructure,  
**So that** I can predict drainage anomalies and flooding risks effectively.

### Scenario: Switching to Heavy Rain Mode
* **Given** the Campus Sustainability Dashboard is initialized and system telemetry is healthy.
* **When** the user selects the "Heavy Rain" mode from the weather preset selector.
* **Then** the Agent should dynamically trigger the CSS rain-drop particle effects.
* **And** the reservoir water level (`.wave` element) must smoothly transition to its designated height.
* **And** if the water level exceeds 70%, the main spillway status must automatically switch to "OPEN".

---

## 🛡️ Feature 2: High-Risk Budget Approval with Human-in-the-Loop (HITL)
**As a** University Financial Auditor,  
**I want** high-risk or large-budget agent operations to undergo human verification,  
**So that** unexpected autonomous agent financial decisions can be strictly governed.

### Scenario: Processing a Budget Request Over the Auto-Approve Limit
* **Given** the Expense Agent is active with the auto-approval threshold set to $5,000 NTD.
* **When** a budget request for the "Smart IoT Drainage Sensor Upgrade Project" is submitted with an amount of $12,500 NTD.
* **Then** the Agent must intercept the workflow via the Triage Switch.
* **And** the Agent must pause execution and display `[👤 HUMAN INTERVENTION REQUIRED]`.
* **And** the transaction shall only be finalized after a human explicitly inputs verification confirmation (`yes`).
