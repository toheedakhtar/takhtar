function showAbout() {
    about = `<p>A CS student and a builder<br><br> 
        I'm interested in intelligence and space. I think because they are most promising in answering the question perodically itching my mind, <u>"What is The Truth?</u> (I will write more on this soon)", plus I think they are a great north star as they make one humble, and to strive for something greater.
        <br>
        <br>Tinkering with AI/ML right now and building projects that jumps into my mind perodically. I also like reading, anime, and boxing.<br>
        <u>Looking for internships and oppurtunities to learn and grow.</u>
        </p>`
    document.getElementById('content').innerHTML = about;
}


function showProjects() {
    projects = `<p>
        <ul>
            <li><a target="_blank" href="https://beat-sync-eight.vercel.app/">beatSync</a> :     Fullstack ML music recommender based on KNN. </li>

            <li><a target="_blank" href="https://pixbook.pythonanywhere.com/">Pixbook</a> :     Read ebooks as they should be. </li>
            
            <li><a target="_blank" href="https://github.com/toheedakhtar/semantic_chunking_yt">Semantic-chunker-yt</a> :     Extracts meaningful text/audio pairs from youtube (url). </li>
            
            <li><a target="_blank" href="https://huggingface.co/spaces/Tohidichi/moggedormogger">MoggedorMogger</a> :     ai model which tells your mog stats. </li>
            
            <li><a target="_blank" href="https://github.com/toheedakhtar/Titanic_survival">Titanic DS</a> :     Would you survive in the Titanic??. </li>
            
            <li><a target="_blank" href="https://github.com/toheedakhtar/cmdto">cmdto</a>:      cli tool for searching linux commands.</li>
            
            <li><a target="_blank" href="https://aitrustbar.pythonanywhere.com/">aitrustbar</a> :       A place to discuss AI safety and security. </li>
            
            <li><a target="_blank" href="https://youtu.be/XeepT7UOjrU">MiningGPT (SIH)</a> :      Answers question about mining legeslation. </li>
            
            <li><a target="_blank" href="https://drive.google.com/drive/folders/1uLYUTqknxdlGOqGdH6fZ8C_Mayl1bqa-">ChatBot</a> :     Upload data and interact with it. </li>
            </ul>
            </p>`
    document.getElementById('content').innerHTML = projects;
}


function showReadingList() {
    list = `<ul>
        <li>1984</li>
        <li>The Alchemist</li>
        <li>Pride and Prejudice</li>
        <li>Ender's Game</li>
        <li>Zero to One</li>
        <li>Tao Te Ching</li>
        <li>Man's Search for Meaning</li>
        <li>Elon Musk</li>
        <li>Can't hurt me</li>
        <li>Shoe Dog</li>
        <li>Steve Jobs</li>
        <li>Rework</li>
        <li>Six Easy pieces</li>
        <li>My Inventions: Autobiography of Tesla</li>
        <li>The Prophet by Khalil Gibran</li>
        <li>Delivering Happiness : Tony Hsieh autobiography</li>
        <li>.....</li>
        </ul>`
    document.getElementById('content').innerHTML = list;
}

function showLinks() {
    links = `<ul>
            <li><a href="https://github.com/toheedakhtar" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/toheedakhtar01" target="_blank">LinkedIN</a></li>
            <li><a href="https://mobile.twitter.com/ToheedAkhtar0" target="_blank">Twitter/X</a></li>
            <li><a href="https://mail.google.com/mail/?view=cm&source=mailto&to=toheedak333@gmail.com" target="_blank">Gmail</a></li>`

    document.getElementById('content').innerHTML = links;
}