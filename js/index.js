function showAbout() {
    about = `
        <h3>About</h3>
        <p>An aspiring AI researcher and CS student with a deep passion for understanding intelligence and exploring the frontiers of machine learning.</p>
        
        <p>I'm interested in intelligence and space, areas that address profound questions like <em>"What is The Truth?"</em>  These pursuits keep me humble and striving for something greater.</p>
        
        <p>I'm passionate about AI/ML research, building systems from scratch and replicating papers to understand them deeply. I work on training LLMs, exploring different architectures, putting things together and trying out new ideas and thinking critically about alignment and its implications.</p>
        
        <p>Beyond research, I enjoy reading, anime, and boxing.</p>
        
        <p><strong>Currently seeking:</strong> Research opportunities and collaborations in AI/ML.</p>

        <div class="experience">
            <p class="experience-title">Experience</p>
            <ul class="experience-list">
                <li class="experience-item">
                    <div class="experience-row">
                        <span class="experience-role">AI/ML Intern · Chirpn AI</span>
                        <span class="experience-date">Mar 2025 – Oct 2025</span>
                    </div>
                    <p style="color: #555; font-size: 0.95rem; margin: 0;">Pune / Remote</p>
                    <ul class="experience-points">
                        <li>Created coding, GitHub, and Jira agents from scratch using CrewAI.</li>
                        <li>Owned workflow development and cut token usage by agents by ~85%.</li>
                        <li>Built A2A, MCP protocols and custom tools for GitHub, Jira, and file operations.</li>
                        <li>Built and deployed agentic workflows in production using LangGraph and Docker.</li>
                        <li>Delivered client demos for agentic AI workflow solutions.</li>
                        <li>Worked on initial project plans and technical specifications for client engagements.</li>
                    </ul>
                </li>
                <li class="experience-item">
                    <div class="experience-row">
                        <span class="experience-role">Full Stack Developer · buildspace</span>
                        <span class="experience-date">Aug 2024 – Sep 2024</span>
                    </div>
                    <p style="color: #555; font-size: 0.95rem; margin: 0;">SF Bay Area / Remote</p>
                    <ul class="experience-points">
                        <li>Selected for a 6-week program funded by Y Combinator and a16z (Nightz & Weekends).</li>
                        <li>Built a tech product alongside a global community; shipped MVP to 1000+ hits.</li>
                        <li>Independently built and scaled an MVP end-to-end.</li>
                    </ul>
                </li>
            </ul>
        </div>
    `;
    document.getElementById('content').innerHTML = about;
}

function showProjects() {
    projects = `
        <h3>Projects</h3>
        
        <h4>AI / ML</h4>
        <ul>
            <li><a target="_blank" href="https://github.com/toheedakhtar/llm-scratch">llm-scratch</a> — Large Language Model built from tokenization to evaluation from scratch in PyTorch.</li>

            <li><a target="_blank" href="https://huggingface.co/Tohidichi/gemma3-genz-270m">gemma3-genz-270m</a> — Finetuned Gemma 3 on a synthetic dataset to speak like a Gen Z college student, Using LoRA.</li>

            <li><a target="_blank" href="https://github.com/toheedakhtar/semantic_chunking_yt">Semantic-chunker-yt</a> — Extracts and aligns meaningful text/audio pairs from YouTube videos for multimodal analysis.</li>

            <li><a target="_blank" href="https://huggingface.co/spaces/Tohidichi/moggedormogger">MoggedorMogger</a> — Computer vision model that analyzes facial aesthetics and provides ratings based on a social media trend, deployed on HuggingFace.</li>

            <li><a target="_blank" href="https://beat-sync-eight.vercel.app/">beatSync</a> — Full-stack ML recommender using KNN-based embeddings for personalized music suggestions.</li>
        </ul>

        <h4>Other</h4>
        <ul>
            <li><a target="_blank" href="https://github.com/toheedakhtar/RDR2-Journal">RDR2-Journal</a> — Detailed replica of Arthur Morgan's journal from Red Dead Redemption 2, recreating the aesthetic and storytelling.</li>

            <li><a target="_blank" href="https://pixbook.pythonanywhere.com/">Pixbook</a> — Elegant ebook reader application designed to present digital books with optimal reading experience.</li>

            <li><a target="_blank" href="https://github.com/toheedakhtar/cmdto">cmdto</a> — Command-line tool for quickly searching and discovering Linux terminal commands.</li>
        </ul>
    `;
    document.getElementById('content').innerHTML = projects;
}

function showReplications() {
    replications = `
        <h3>Replications</h3>
        <p>Paper implementations and replications to understand ML research from the ground up:</p>
        <ul>
            <li><a target="_blank" href="https://github.com/toheedakhtar/llm-scratch">GPT-2</a> — Replicated GPT-2 from BPE to Pretrained, Instruction fine tuned and loaded open weights.</li>
            
            <li><a target="_blank" href="https://github.com/toheedakhtar/ai-research/blob/main/multi_head_attn.ipynb">Attention / MHA</a> — Multi-head attention mechanism implementation, the core building block of transformers.</li>
            
            <li><a target="_blank" href="https://github.com/toheedakhtar/Ml-Implementations/tree/main/LeNet">LeNet</a> — Implementation of LeNet to detect numbers.</li>
            
            <li><a target="_blank" href="https://github.com/toheedakhtar/Ml-Implementations/tree/main/AlexNet">AlexNet</a> — Implementation in PyTorch.</li>
            
            <li><a target="_blank" href="https://github.com/toheedakhtar/Ml-Implementations/blob/main/RNN/simple_rnn.ipynb">Recurrent Neural Networks</a> — RNN implementation to detect language.</li>
        </ul>
    `;
    document.getElementById('content').innerHTML = replications;
}

function showPublications() {
    publications = `
        <h3>Publications</h3>
        <p>currently in the works.</p>
        <p style="margin-top: 1.5rem; color: #888; font-style: italic; font-size: 0.95rem;">Coming soon.</p>
    `;
    document.getElementById('content').innerHTML = publications;
}

function showLinks() {
    links = `
        <h3>Contact</h3>
        <ul>
            <li><a href="mailto:toheedak333@gmail.com">Email</a></li>
            <li><a href="https://github.com/toheedakhtar" target="_blank">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/toheedakhtar01" target="_blank">LinkedIn</a></li>
            <li><a href="https://x.com/toheedakhtar01" target="_blank">Twitter/X</a></li>
        </ul>
    `;
    document.getElementById('content').innerHTML = links;
}

window.addEventListener('DOMContentLoaded', showAbout);
