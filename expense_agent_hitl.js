const readline = require('readline');

// Check command-line arguments for auto-simulation mode
const isAutoSimulated = process.argv.includes('--auto');

// ==========================================
// 1. SECURITY THREAT SCANNER
// ==========================================
function runThreatScan() {
  console.log("=== 🛡️ [Security Scan] Starting environment threat scan... ===");
  
  // Real check for hardcoded keys in environment or memory
  const apiPatterns = [/AIzaSy[A-Za-z0-9_-]{35}/, /AQ\.[A-Za-z0-9_-]{40,}/];
  let threatDetected = false;
  
  // Check simulated and real env variables
  for (const [key, value] of Object.entries(process.env)) {
    for (const pattern of apiPatterns) {
      if (pattern.test(value)) {
        console.error(`[🚨 SECURITY ALERT] Exposed active API Key found in env variable: ${key}`);
        threatDetected = true;
      }
    }
  }

  // Also check some mock checks in variables to demonstrate safety
  const mockKeysToCheck = [
    "AQ.Ab8_MOCK_TEST_KEY_PLACEHOLDER_JUST_FOR_DEMO_PURPOSES"
  ];
  
  for (const key of mockKeysToCheck) {
    if (key.startsWith("AQ.Ab8") && key.length > 20) {
      console.warn(`[⚠️ Threat Warning] Detected simulated test key pattern: "${key.substring(0, 8)}..."`);
    }
  }

  if (threatDetected) {
    console.error("[❌ ABORT] Threat scan failed! Exposed credentials detected. Execution halted.");
    process.exit(1);
  }
  
  console.log("=== 🛡️ [Security Scan] Scan complete. No active credentials exposed. ===\n");
}

// ==========================================
// 2. EXPENSE APPROVAL WITH HITL TRIAGE
// ==========================================
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  if (isAutoSimulated) {
    return new Promise(resolve => {
      console.log(query + "[Simulating Human Input: 'yes' after 2s]");
      setTimeout(() => {
        console.log(">>> yes");
        resolve("yes");
      }, 2000);
    });
  }
  return new Promise(resolve => rl.question(query, resolve));
}

async function processExpense(description, amount) {
  console.log(`\n--------------------------------------------------`);
  console.log(`Processing Request: "${description}"`);
  console.log(`Amount: $${amount} NTD`);
  console.log(`--------------------------------------------------`);

  if (amount <= 5000) {
    // Auto-Approve Mechanism
    console.log(`[🤖 Agent Decision] Auto-Approved (Reason: Amount <= $5000 NTD limit)`);
    console.log(`✅ Request for "${description}" ($${amount} NTD) successfully processed by Agent.`);
    return true;
  } else {
    // Human-in-the-loop (HITL) Threshold Triggered
    console.warn(`[⚠️ HITL Warning] Expense amount ($${amount} NTD) exceeds the $5000 auto-approval threshold.`);
    console.warn(`[Triage Switch] Routing to Human Administrator for verification...`);
    
    console.log(`\n==================================================`);
    console.log(`[👤 HUMAN INTERVENTION REQUIRED]`);
    console.log(`Project: "${description}"`);
    console.log(`Requested Budget: $${amount} NTD`);
    console.log(`==================================================`);
    
    // Prompt for human input
    const answer = await askQuestion(`>>> Do you approve this expense? (type 'yes' or 'no'): `);
    
    if (answer.trim().toLowerCase() === 'yes') {
      console.log(`\n[✅ Approved] Human approved the expense.`);
      console.log(`Status: Approved and Logged.`);
      return true;
    } else {
      console.log(`\n[❌ Rejected] Human rejected the expense.`);
      console.log(`Status: Rejected and Cancelled.`);
      return false;
    }
  }
}

async function main() {
  // Run security scan first
  runThreatScan();

  // Test Case 1: Under threshold (Auto-Approve)
  await processExpense("Campus Organic Garden Seeds Purchase", 3500);

  // Test Case 2: Over threshold (Triggers HITL)
  await processExpense("Smart IoT Drainage Sensor Upgrade Project", 12500);

  rl.close();
}

main().catch(err => {
  console.error("Execution error:", err);
  rl.close();
});
