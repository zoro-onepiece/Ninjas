export const metadata = {
  title: "About", // Will show as "Ninja Core | About"
};

const About = () => {
    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1>About Ninja Core</h1>
            <p>This is a Next.js application showcasing ninja data with modern web development techniques.</p>
            
            <p>The app is inspired by:
                <a 
                    href="https://www.youtube.com/c/TheNetNinja" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#e94560', marginLeft: '0.5rem', textDecoration: 'none' }}
                >
                    Net Ninja
                </a>
            </p>
            
            
            
            <p>Check out the source code on GitHub:
                <a 
                    href="https://github.com/zoro-onepiece/Ninjas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#e94560', marginLeft: '0.5rem', textDecoration: 'none' }}
                >
                    GitHub Repository
                </a>
            </p>
            
            <p>Feel free to explore and learn more about what this app has to offer.</p>
            <p>Thank you for visiting!</p>
        </div>
    );
}

export default About;