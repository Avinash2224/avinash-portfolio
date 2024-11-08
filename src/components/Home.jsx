import { TypeAnimation } from 'react-type-animation';
import profileImage from '../assets/avi.png';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-200"
    >
      <div className="flex items-center justify-around max-w-7xl w-full mx-auto">
        {/* Move the photo to the far left */}
        <div className="flex justify-start">
          <div className="relative w-80 h-80 overflow-hidden rounded-full">
            <img
              src={profileImage} // Use the imported image
              alt="Profile"
              className="object-cover w-full aspect-square" // Fill the circle fully
            />
          </div>
        </div>

        {/* Right side for the text */}
        <div className="text-left p-6">
          <h2 className="text-2xl font-bold text-black mb-4">
            <TypeAnimation
              sequence={[
                'Hey! This is Avinash Alok',
                1000,
                'I am a full stack developer.',
                1000,
                'I am a DSA enthusiast.',
                1000,
                "I am a Cloud Advocate."
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h2>
          <p className="text-lg text-gray-700">
            I am a full-stack developer with a strong foundation in modern web technologies. I completed my graduation from the Indian Institute of Information Technology, Kottayam, where I gained a deep understanding of both frontend and backend development. I&apos;m passionate about creating efficient, scalable applications and continuously learning new tools and technologies to enhance my skills. I thrive in collaborative environments and am always excited to tackle complex challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
