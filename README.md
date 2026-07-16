# 🚀 Nginx AWS Deployment — Advanced Configuration Lab

![AWS](https://img.shields.io/badge/AWS-EC2-orange?logo=amazonaws&logoColor=white)
![VPC](https://img.shields.io/badge/AWS-VPC-orange?logo=amazonaws&logoColor=white)
![ALB](https://img.shields.io/badge/AWS-Load%20Balancer-orange?logo=amazonaws&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-Web%20Server-009639?logo=nginx&logoColor=white)
![SSL](https://img.shields.io/badge/SSL-AWS%20ACM-003A70?logo=letsencrypt&logoColor=white)
![Ubuntu](https://img.shields.io/badge/OS-Ubuntu%2022.04-E95420?logo=ubuntu&logoColor=white)
![Django](https://img.shields.io/badge/Backend-Django-092E20?logo=django&logoColor=white)
![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Status](https://img.shields.io/badge/Status-Live-brightgreen)
> Turning a single Ubuntu EC2 instance into a fully routed, secured, multi-application server — reverse proxying, virtual hosting, and HTTPS, all configured by hand with Nginx.

---

## 📖 Overview

This repo documents a hands-on DevOps lab where I deployed and configured **Nginx** on an **AWS EC2 instance** from scratch — no shortcuts, no pre-built templates. The goal was to understand *why* production infrastructure is built the way it is, not just copy-paste a config and call it done.

Everything here was built, broken, debugged, and fixed on a real cloud server with a real domain and a real SSL certificate.

---

## 🧩 What's Implemented

### ✅ Reverse Proxy
Routed public traffic through Nginx into backend applications (Python, Node.js) running on internal ports — clients never see the actual app ports.

### ✅ Forward Proxy
Configured Nginx as a forward proxy to relay outbound client requests, demonstrating the difference between fronting a server vs. fronting a client.

### ✅ Virtual Hosting
Served multiple independent applications from a single Nginx instance, separated cleanly by port/domain — one server, multiple sites.

### ✅ Custom Domain Integration
Connected a live domain (`haseebxdev.online`) to the EC2 instance via DNS A records, with an Elastic IP to keep the address permanent across reboots.

### ✅ SSL/TLS via Let's Encrypt
Deployed a free, auto-renewing SSL certificate using Certbot — HTTP traffic force-redirects to HTTPS.

### ✅ Context-Based / URL-Based Routing
Routed different URL paths (`/python-app/`, `/node-app/`, `/java-app/`) under one domain to entirely different backend services — the same pattern used in real microservice architectures.

---

## 🏗️ Architecture

```
                         ┌─────────────────────┐
   Client (Browser) ───▶ │   Nginx (443/SSL)    │
                         │  haseebxdev.online   │
                         └──────────┬───────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              ▼                     ▼                     ▼
      /python-app/           /node-app/            /java-app/
      Python :8000           Node.js :3000          Java :8080
```

---

## 📁 Repo Structure

```
nginx-aws-deployment/
├── apps/              # Backend demo applications (Python, Node, Java)
├── nginx-configs/     # All Nginx server block configurations
├── docs/              # Setup notes, screenshots, troubleshooting log
└── README.md
```

---

## 🛠️ Stack

`AWS EC2` · `Ubuntu 22.04` · `Nginx` · `Node.js` · `Python` · `Let's Encrypt / Certbot` · `Git`

---

## 🎯 Why This Project

Most tutorials stop at "install Nginx and serve a static page." This project goes further — simulating a real deployment scenario end-to-end: provisioning cloud infrastructure, wiring up multiple backend services, securing traffic with SSL, and routing requests the same way production systems do at scale.

---

## 📌 Status

Actively maintained — configs and docs are updated as each new capability is added and tested.
