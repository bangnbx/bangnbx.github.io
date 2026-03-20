---
layout: page
title: Bang Nguyen — Resume
icon: fas fa-file
order: 5
description: Software engineer — Solana infrastructure, low-latency systems, back-end development, ML integration. Rust, Python, JavaScript
permalink: /resume/
---

<style>
.resume {
  max-width: 800px;
  margin: 0 auto;
  font-size: 0.95em;
  line-height: 1.5;
  font-family: 'Times New Roman', Times, serif;
}
.resume-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.resume-header .left-info {
  text-align: left;
  font-size: 0.85em;
  color: var(--text-muted-color);
}
.resume-header .name {
  font-size: 1.8em;
  font-weight: bold;
  font-variant: small-caps;
  letter-spacing: 3px;
}
.resume-header .right-info {
  text-align: right;
  font-size: 0.85em;
  color: var(--text-muted-color);
}
.resume-section-title {
  font-variant: small-caps;
  font-weight: bold;
  font-size: 1.05em;
  border-bottom: 1px solid var(--text-muted-color);
  padding-bottom: 3px;
  margin-top: 1.2rem;
  margin-bottom: 0.5rem;
}
.resume-entry-header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 0.95em;
  margin-bottom: 0.2rem;
}
.resume-entry-header .center {
  text-align: center;
}
.resume-list {
  margin: 0.2rem 0 0.8rem 1.2rem;
  padding: 0;
}
.resume-list li {
  margin-bottom: 0.25rem;
  font-size: 0.93em;
}
.resume-inline-list {
  margin: 0.2rem 0 0.8rem 1.2rem;
  padding: 0;
}
.resume-inline-list li {
  margin-bottom: 0.15rem;
  font-size: 0.93em;
}
.resume-pub {
  margin: 0.2rem 0 0.6rem 1.2rem;
  font-size: 0.9em;
}
.resume-pub .me {
  text-decoration: underline;
}
.resume-pub a {
  word-break: break-all;
}
.resume-download {
  text-align: center;
  margin-bottom: 1.5rem;
}
</style>

<div class="resume-download">
  <a href="/assets/docs/resume.pdf" target="_blank">📄 Download PDF version</a>
</div>

<div class="resume">

<div class="resume-header">
  <div class="left-info">Hanoi, Vietnam</div>
  <div class="name">Bang Nguyen</div>
  <div class="right-info">bangnbx [at] gmail [dot] com</div>
</div>

<div class="resume-section-title">Experience</div>

<div class="resume-entry-header">
  <span>Founder &amp; Engineer</span>
  <span class="center">Real-Time Solana Analytics &amp; Execution System</span>
  <span>Apr 2025 – Present</span>
</div>
<ul class="resume-list">
  <li>Data ingestion: built fault-tolerant local state engine in Rust (Tokio async runtime, RocksDB, shared memory IPC), synchronizing tracked accounts via Yellowstone gRPC and RPC, utilizing multi providers for cross-validation and handling slot skipping</li>
  <li>Execution: processed real-time transactions via gRPC and shredstream for sub-millisecond signal detection, evaluated conditions against local state, and submitted trades programmatically</li>
  <li>On-Chain: used Anchor framework to build cross-verified local state against on-chain data; determined optimal trade size algorithmically based on pool liquidity and price modeling</li>
  <li>Analytics: decoded on-chain instructions and logs across DEX protocols (Meteora, Raydium, Pumpfun, Jupiter, ...) to identify and classify trade patterns</li>
</ul>

<div class="resume-entry-header">
  <span>Engineer &amp; Researcher</span>
  <span class="center">FPT Technology Research Institute</span>
  <span>Oct 2017 – Apr 2025</span>
</div>
<ul class="resume-list">
  <li>eKYC system: engineered ML verification pipeline and mobile SDK integration; deployed across banking and financial institutions — published at IEEE KSE 2022</li>
  <li>ML Model fine-tuning: fine-tuned small language models for text-to-SQL tasks using reinforcement learning techniques — published in NLP Journal 2025</li>
  <li>Credit Scoring: built end-to-end scoring system from data preprocessing through model evaluation to production deployment serving financial institutions</li>
  <li>Data infrastructure: designed multi-service backend architecture; automated large-scale data crawling pipelines (Python, Elasticsearch, MongoDB)</li>
  <li>Led team of developers and researchers across concurrent projects</li>
</ul>

<div class="resume-entry-header">
  <span>Software Engineer</span>
  <span class="center">Bayo Vietnam (startup in travel and tourism)</span>
  <span>Feb 2016 – Aug 2017</span>
</div>
<ul class="resume-list">
  <li>Application: built backend architecture for travel booking, search, and social networking features</li>
  <li>Data ingestion: built near-realtime web crawler for aggregating travel review data across forums</li>
</ul>

<div class="resume-section-title">Skills</div>

<ul class="resume-inline-list">
  <li>Programming languages:  Rust, Python, Javascript, Shell</li>
  <li>Strong background in data structures &amp; algorithms</li>
  <li>Blockchain:  Solana, EVM (BSC/Arbitrum/Polygon) tools</li>
  <li>Back-end development: low-latency system, multi-service architecture, integrating machine learning models</li>
  <li>Database &amp; Search Engine:  RocksDB, SQL, Milvus (vector DB), MongoDB, Elasticsearch</li>
  <li>DevOps: Docker, Ansible</li>
  <li>Others:  Crawling, Linux, Jupyter notebook</li>
  <li>Languages:  Vietnamese (Native speaker), English (IELTS 7.5 - Apr 2025)</li>
</ul>

<div class="resume-section-title">Projects</div>

<ul class="resume-inline-list">
  <li><strong>Credit Scoring</strong> Assessed user creditworthiness based on social media profiles and behavioral patterns</li>
  <li><strong>Social Listening</strong> Processed and analyzed data from millions of users in near real-time at scale</li>
  <li><strong>e-KYC Solution</strong> end-to-end identity verification system — document OCR, facial recognition, video verification, and user identity validation</li>
  <li><strong>Bayo Platform</strong> booking platform and travel-oriented social network</li>
  <li><strong>Freelance projects</strong>  Backend &amp; mobile applications</li>
</ul>

<div class="resume-section-title">Education</div>

<div class="resume-entry-header">
  <span>Hanoi</span>
  <span class="center">VNU University of Engineering and Technology</span>
  <span>2021 – 2023</span>
</div>
<ul class="resume-list">
  <li>Master in Computer Science. GPA: 3.56/4</li>
</ul>

<div class="resume-entry-header">
  <span>Hanoi</span>
  <span class="center">Hanoi University of Science and Technology</span>
  <span>2012 – 2017</span>
</div>
<ul class="resume-list">
  <li>B.S. in Electrical Engineering and Telecommunications (Talented program). GPA: 3.24/4</li>
</ul>

<div class="resume-section-title">Awards</div>

<ul class="resume-inline-list">
  <li><strong>VPBank Hackathon 2018</strong> (VPBank)  The most realistic project in the final round</li>
  <li><strong>Google Developer Group in Hanoi mini hackathon 2017</strong> (GDG Hanoi)  First prize</li>
  <li><strong>Code War (CTF, Competitive Programming, AI 2017)</strong> (Framgia - Sun Asterisk)  Second prize</li>
  <li><strong>Vietnam Informatics Olympiad 2012</strong> (Ministry of Education and Training)  Consolation prize</li>
</ul>

<div class="resume-section-title">Publications</div>

<div class="resume-pub"><span class="me">Xuan-Bang Nguyen</span>, Xuan-Hieu Phan, and Massimo Piccardi. “Fine-tuning text-to-SQL models with reinforcement-learning training objectives.” <em>Natural Language Processing Journal</em> 10 (2025): 100135. 
            <br><a href="https://www.sciencedirect.com/science/article/pii/S2949719125000111" target="_blank" rel="noreferrer">https://www.sciencedirect.com/science/article/pii/S2949719125000111</a></div>

<div class="resume-pub">Viet-Trung Tran, Van-Sang Tran, <span class="me">Xuan-Bang Nguyen</span>, and The-Trung Tran. “A liveness detection protocol based on deep visual-linguistic alignment.” <em>In 2022 14th International Conference on Knowledge and Systems Engineering (KSE)</em>, pp. 1-6. IEEE, 2022
            <br><a href="https://ieeexplore.ieee.org/document/9953623" target="_blank" rel="noreferrer">https://ieeexplore.ieee.org/document/9953623</a></div>

</div>