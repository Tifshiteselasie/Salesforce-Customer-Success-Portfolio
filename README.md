# Salesforce Customer Success Portfolio

This portfolio demonstrates how I use Salesforce to support customer success processes, including customer onboarding, account management, customer health monitoring, follow-up activities, reporting, and workflow automation.

## Customer Onboarding & Success Tracker

I built this project to simulate how a Customer Success team can use Salesforce to manage customers throughout onboarding and ongoing engagement.

The project tracks customer information, onboarding progress, customer health, important lifecycle dates, and follow-up activities. It also uses reports, dashboards, and Salesforce Flow to help identify customers who may need additional attention.

## Customer Success Process

The project follows a simple customer success workflow:

**Customer Account → Onboarding → Adoption & Health Monitoring → Follow-Up → Reporting → Automation**

## Salesforce Configuration

### Account & Contact Management

I created fictional customer accounts and contacts to represent different customer situations and stages of the customer lifecycle.

The portfolio includes customers that are:

- Healthy and progressing through onboarding
- Experiencing adoption challenges
- At risk and requiring follow-up
- Successfully onboarded

### Custom Customer Success Fields

I created custom Account fields to track:

- Onboarding Status
- Customer Health
- Customer Tier
- Onboarding Start Date
- Target Go-Live Date
- Renewal Date

These fields provide a structured way to monitor onboarding progress and customer status.

## Reports

I created Salesforce reports to help monitor the customer portfolio and identify accounts requiring attention.

Reports include:

- Customer Health Overview
- Onboarding Status Overview
- Customer Tier Overview
- Customer Go-Live Timeline
- Customers Requiring Attention

## Customer Success Dashboard

I built a Customer Success Dashboard that provides a high-level view of the customer portfolio.

The dashboard includes:

- Customer Health distribution
- Onboarding Status
- Customer Tier
- Customer Go-Live Timeline
- Customers Requiring Attention

The dashboard helps turn customer data into information that can be used to prioritize follow-up and monitor onboarding progress.

## Salesforce Flow Automation

I created a Record-Triggered Flow that automatically creates a follow-up task when a customer's **Customer Health** changes to **At Risk**.

The automation:

1. Detects when an Account becomes At Risk
2. Creates a follow-up Task
3. Assigns the Task to the Account Owner
4. Relates the Task to the customer Account
5. Sets the Task priority to High
6. Sets the due date for three days after the customer becomes At Risk

This helps ensure that at-risk customers receive timely follow-up.

## Salesforce Skills Demonstrated

- Account and Contact Management
- Custom Fields
- Customer Onboarding Tracking
- Customer Health Monitoring
- Customer Lifecycle Management
- Task and Activity Management
- Salesforce Reports
- Salesforce Dashboards
- Record-Triggered Flows
- Workflow Automation
- Salesforce Lightning

## Tools

- Salesforce
- Salesforce Flow
- Salesforce Reports & Dashboards
- GitHub

## Project Screenshots

### Customer Success Dashboard

*Dashboard screenshot will be added here.*

### Customer Health Report

*Customer Health report screenshot will be added here.*

### At-Risk Customer Automation

*Salesforce Flow screenshot will be added here.*
