'use strict';

/* ============================================================
   PROFESSIONAL SKILLS PORTFOLIO — main.js
   Sections:
   1. Session data
   2. Custom cursor
   3. Dark / Light mode toggle
   4. Orbit animation
   5. TOC timeline builder
   6. Filter pills
   7. Canvas morph (orbit dots → timeline nodes)
   8. Scroll detection & morph trigger
   ============================================================ */

/* ════════════════════════════════════════════
   1. SESSION DATA
   ════════════════════════════════════════════ */
const SESSIONS = [
  {
    "n": "01",
    "title": "Portfolio Writing",
    "dotClass": "dp",
    "cat": "emp",
    "tag": "Portfolio",
    "reflection": {
      "resource": "Ms. Chathurika Koswatta",
      "date": "20 January 2026",
      "quote": {
        "text": "Your portfolio is your proof. It's not what you say you can do; it's what you show you have done.",
        "author": "Howard Gardner"
      },
      "overview": "The first session of the Professional Skills module introduced the concept of portfolios and their significance in both academic and professional contexts. The session highlighted that a portfolio is more than a collection of completed work; it is a strategic tool that showcases an individual's skills, achievements, experiences, and professional growth. The discussion emphasized how portfolios can support career development, strengthen personal branding, and provide evidence of competence to potential employers and academic evaluators.",
      "keyLearningsHtml": "<div class=\"modal-sublist-title\">What is a Portfolio?</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">A portfolio is a carefully curated collection of evidence that demonstrates an individual's knowledge, skills, accomplishments, and development over time. It serves as tangible proof of competence and professional growth.</p><div class=\"modal-sublist-title\">Purpose of a Portfolio</div><div class=\"modal-sublist-title\">A portfolio can be used to:</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Demonstrate academic and professional achievements.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Support internship and job applications.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Showcase skills and competencies.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Document personal growth and learning experiences.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Build a professional identity and personal brand.</p><div class=\"modal-sublist-title\">Types of Portfolios</div><div class=\"modal-sublist-title\">The session introduced several portfolio categories:</div><div class=\"modal-sublist-title\">Personal Portfolio</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Used to showcase personal interests, creative work, talents, and achievements.</p><div class=\"modal-sublist-title\">Career Portfolio</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Contains career-related documents such as CVs, cover letters, references, and career plans.</p><div class=\"modal-sublist-title\">Employment Portfolio</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Includes work samples, certifications, evaluations, and evidence of professional accomplishments.</p><div class=\"modal-sublist-title\">Assessment Portfolio</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Documents learning progress, reflections, assignments, projects, and academic development.</p><div class=\"modal-sublist-title\">Essential Components of an Effective Portfolio</div><div class=\"modal-sublist-title\">A professional portfolio should include:</div><div class=\"modal-sublist-title\">Personal Introduction</div><div class=\"modal-sublist-title\">Curriculum Vitae (CV)</div><div class=\"modal-sublist-title\">Skills and Competencies</div><div class=\"modal-sublist-title\">Work Samples and Achievements</div><div class=\"modal-sublist-title\">Certifications and Awards</div><div class=\"modal-sublist-title\">Reflections and Self-Evaluations</div><div class=\"modal-sublist-title\">Future Goals and Career Aspirations</div><div class=\"modal-sublist-title\">Importance of Reflection</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">One of the most valuable lessons from this session was the importance of reflection. Reflection transforms a portfolio from a simple collection of documents into a meaningful representation of personal and professional growth. It allows individuals to evaluate their experiences, identify areas for improvement, and demonstrate continuous learning.</p>",
      "interactiveActivity": "During the session, we participated in discussions and activities that encouraged us to think critically about our achievements, skills, and experiences. We explored how different pieces of evidence can be organized and presented effectively within a portfolio. These activities helped me understand that a portfolio should not simply contain documents but should tell a story about an individual's learning journey and professional development.",
      "body": "Prior to this session, I viewed a portfolio mainly as a collection of completed work and achievements. However, this session helped me understand that a portfolio serves a much greater purpose. It is a professional branding tool that communicates an individual's capabilities, experiences, and growth journey to potential employers, educators, and other stakeholders. I also learned the importance of organizing information effectively and providing context for each piece of evidence included in a portfolio. Reflection emerged as a crucial component because it demonstrates critical thinking, self-awareness, and continuous improvement. As an Information Technology undergraduate preparing for future internships and career opportunities, I now recognize the value of maintaining a professional digital portfolio that showcases not only my technical abilities but also my personal and professional development.",
      "action": "• The knowledge gained from this session directly influenced the design and development of this Professional Skills Portfolio.\n• To apply the concepts discussed:\n• I structured this portfolio using a clear and organized layout.\n• I included reflective sections to demonstrate learning and growth.\n• I focused on presenting evidence of skills and achievements rather than simply listing activities.\n• I selected a web-based format to improve accessibility, professionalism, and ease of updating.\n• I plan to continuously update this portfolio with future projects, certifications, achievements, and professional experiences.",
      "galleryItems": [
        "Assets/1-portfolio_1.png",
        "Assets/1-portfolio_2.png",
        "Assets/1-portfolio_3.png",
        "Assets/1-portfolio_4.png",
        "Assets/1-portfolio_5.png"
      ],
      "galleryFigure": "Figure 1: Participation in the Portfolio Development session conducted by Ms. Chathurika Koswatta.",
      "keyTakeaway": "This session provided a strong foundation for understanding the purpose and value of portfolios. It reinforced the importance of documenting achievements, reflecting on learning experiences, and building a professional identity that can support future academic and career aspirations. Most importantly, I learned that a portfolio is not merely a record of accomplishments but a powerful tool for showcasing growth, competence, and lifelong learning."
    }
  },
  {
    "n": "02",
    "title": "Mastering the Art of Interview",
    "dotClass": "dt",
    "cat": "emp",
    "tag": "Interview",
    "reflection": {
      "resource": "Mr. Darshana Bandara",
      "date": "30 January 2026",
      "quote": {
        "text": "Your brand is what people say about you when you're not in the room.",
        "author": "Jeff Bezos"
      },
      "overview": "This session focused on three essential aspects of professional readiness: building a strong LinkedIn profile, creating an ATS-friendly curriculum vitae (CV), and developing effective interview skills. The session highlighted the importance of maintaining a professional digital presence and demonstrated how recruiters evaluate candidates beyond their academic qualifications and technical abilities. As modern recruitment processes increasingly rely on digital platforms and automated screening systems, students were encouraged to develop a professional online identity and prepare themselves for future internship and employment opportunities.",
      "keyLearningsHtml": "<div class=\"modal-sublist-title\">LinkedIn as a Professional Networking Platform</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">LinkedIn is more than an online résumé; it is a professional networking platform that enables individuals to connect with industry professionals, showcase their achievements, and build their personal brand.</p><div class=\"modal-sublist-title\">Key elements of an effective LinkedIn profile include:</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">A professional profile photograph.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">An engaging headline that highlights career interests.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">A well-written \"About\" section.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Relevant skills and endorsements.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Educational and professional achievements.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Active engagement with professional content and communities.</p><div class=\"modal-sublist-title\">ATS-Friendly CV Writing</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">The session introduced the concept of Applicant Tracking Systems (ATS), which are commonly used by recruiters to screen and filter job applications.</p><div class=\"modal-sublist-title\">Important guidelines for ATS-friendly CVs include:</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Using a simple and clean layout.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Avoiding tables, graphics, and multiple columns.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Using professional fonts such as Arial, Calibri, or Times New Roman.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Including clear section headings.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Highlighting relevant skills and experiences.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Carefully proofreading for grammatical and spelling errors.</p><div class=\"modal-sublist-title\">Interview Skills and Professional Communication</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">The session also discussed strategies for performing effectively during interviews.</p><div class=\"modal-sublist-title\">Key recommendations included:</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Researching the company and role beforehand.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Communicating clearly and confidently.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Maintaining positive body language and eye contact.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Demonstrating enthusiasm and willingness to learn.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Preparing responses for common interview questions.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Listening actively and responding thoughtfully.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">One of the most valuable lessons from this session was that attitude, professionalism, and communication skills often have a greater impact on interview success than technical knowledge alone, especially for entry-level positions.</p>",
      "interactiveActivity": "During the session, we examined examples of LinkedIn profiles and CVs to identify both effective and ineffective practices. We also discussed common interview questions and explored strategies for answering them professionally. These activities helped me understand how recruiters evaluate candidates and highlighted the importance of presenting myself effectively both online and during interviews.",
      "body": "Before attending this session, I viewed LinkedIn primarily as a platform for creating an online résumé. However, I learned that it is a powerful networking and personal branding tool that can significantly influence career opportunities. I was particularly surprised to learn about Applicant Tracking Systems and how many CVs are rejected before reaching a recruiter due to poor formatting. This changed my perspective on CV design and emphasized the importance of creating documents that are both professional and ATS-compatible. The discussion on interview techniques also helped me recognize the importance of confidence, preparation, and communication. I realized that employers value candidates who demonstrate a positive attitude, a willingness to learn, and strong interpersonal skills. As I prepare for future internships and professional opportunities, the knowledge gained from this session will help me present myself more effectively and increase my confidence throughout the recruitment process.",
      "action": "• The lessons from this session have already influenced my professional development.\n• To apply what I learned:\n• I updated my LinkedIn profile to better reflect my skills, experiences, and career aspirations.\n• I improved my professional headline and profile information.\n• I reviewed and refined my CV using ATS-friendly formatting principles.\n• I began preparing responses to common interview questions.\n• I will continue developing my communication skills through presentations, discussions, and mock interviews.\n• I plan to actively engage with professionals and industry-related content on LinkedIn to expand my professional network.",
      "galleryItems": [
        "Assets/2-interview_1.jpeg",
        "Assets/2-interview_2.png",
        "Assets/2-interview_3.png",
        "Assets/2-interview_4.png",
        "Assets/2-interview_5.png",
        "Assets/2-interview_6.png"
      ],
      "galleryFigure": "Figure 2: Participation in the LinkedIn, CV Writing, and Interview Skills session conducted by Mr. Darshana Bandara.",
      "keyTakeaway": "This session highlighted the importance of professional branding, effective communication, and career preparation. It taught me that success in today's professional environment requires more than technical expertise; it also depends on how effectively an individual presents themselves, communicates their value, and builds professional relationships. The knowledge gained from this session will support me as I prepare for internships and future career opportunities in the IT industry."
    }
  },
  {
    "n": "03",
    "title": "Professional Skills, Values & Self-Awareness",
    "dotClass": "dp",
    "cat": "com",
    "tag": "Self-Awareness",
    "reflection": {
      "resource": "Ms. Oshani",
      "date": "27 January 2026",
      "quote": {
        "text": "Knowing yourself is the beginning of all wisdom.",
        "author": "Aristotle"
      },
      "overview": "This session introduced the concept of professional skills and highlighted their importance in academic, personal, and professional success. The discussion emphasized that technical knowledge alone is not sufficient in today's workplace; employers also value communication, teamwork, leadership, adaptability, and other employability skills that enable individuals to work effectively with others and respond to challenges. The session further explored the concepts of values, beliefs, attitudes, and character, demonstrating how these factors influence workplace behaviour and decision-making. An important part of the session focused on the Johari Window model, which was used to develop self-awareness and encourage personal growth through reflection and feedback.",
      "keyLearningsHtml": "<div class=\"modal-sublist-title\">Understanding Professional Skills</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Professional skills, often referred to as employability skills, are the personal and interpersonal abilities that complement technical expertise and contribute to workplace success.</p><div class=\"modal-sublist-title\">These skills help individuals:</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Communicate effectively.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Work collaboratively in teams.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Solve problems efficiently.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Adapt to changing environments.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Demonstrate leadership and responsibility.</p><div class=\"modal-sublist-title\">Classification of Workplace Skills</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">The session introduced three major categories of workplace skills:</p><p>1. Technical Skills</p><p>2. Soft Skills</p><p>3. Transferable Skills</p><div class=\"modal-sublist-title\">Technical Skills</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Technical skills are job-specific competencies and specialized knowledge required to perform particular tasks.</p><div class=\"modal-sublist-title\">Examples include:</div><div class=\"modal-sublist-title\">Programming languages</div><div class=\"modal-sublist-title\">Database management</div><div class=\"modal-sublist-title\">Graphic design tools</div><div class=\"modal-sublist-title\">Data analysis software</div><div class=\"modal-sublist-title\">Soft Skills</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Soft skills relate to interpersonal communication and interactions with others.</p><div class=\"modal-sublist-title\">Examples include:</div><div class=\"modal-sublist-title\">Communication</div><div class=\"modal-sublist-title\">Teamwork</div><div class=\"modal-sublist-title\">Leadership</div><div class=\"modal-sublist-title\">Conflict resolution</div><div class=\"modal-sublist-title\">Emotional intelligence</div><div class=\"modal-sublist-title\">Transferable Skills</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Transferable skills can be applied across different industries, roles, and situations.</p><div class=\"modal-sublist-title\">Examples include:</div><div class=\"modal-sublist-title\">Problem-solving</div><div class=\"modal-sublist-title\">Critical thinking</div><div class=\"modal-sublist-title\">Time management</div><div class=\"modal-sublist-title\">Project management</div><div class=\"modal-sublist-title\">Adaptability</div><div class=\"modal-sublist-title\">Values, Beliefs, Attitudes, and Character</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">These four concepts represent the inner drivers of professional behaviour. They influence how you act, react, and interact in the workplace.</p><div class=\"modal-sublist-title\">Values</div><div class=\"modal-text\"><p style=\"margin-bottom: 8px;\"><strong>What they are:</strong> Core principles and beliefs that guide an individual's behaviour and decision-making process. They serve as your moral compass.</p><p style=\"margin-bottom: 4px; font-weight: 500;\">Examples:</p><ul style=\"margin: 0 0 8px 16px; padding: 0; list-style-type: disc;\"><li style=\"margin-bottom: 4px;\"><strong>Honesty</strong> – Being truthful even when it's difficult</li><li style=\"margin-bottom: 4px;\"><strong>Integrity</strong> – Doing the right thing when no one is watching</li><li style=\"margin-bottom: 4px;\"><strong>Respect</strong> – Treating others with dignity</li><li style=\"margin-bottom: 4px;\"><strong>Responsibility</strong> – Owning your actions and commitments</li></ul><p style=\"margin-bottom: 0;\"><strong>Why they matter:</strong> Values determine what you stand for and what you prioritise at work.</p></div><div class=\"modal-sublist-title\">Beliefs</div><div class=\"modal-text\"><p style=\"margin-bottom: 8px;\"><strong>What they are:</strong> Personal assumptions and convictions that shape how you perceive the world and yourself. They are deeply ingrained from experiences, culture, and upbringing.</p><p style=\"margin-bottom: 4px; font-weight: 500;\">Examples:</p><ul style=\"margin: 0 0 8px 16px; padding: 0; list-style-type: disc;\"><li style=\"margin-bottom: 4px;\"><strong>Self-efficacy</strong> – Believing you can accomplish tasks and overcome obstacles</li><li style=\"margin-bottom: 4px;\"><strong>Growth mindset</strong> – Believing you can learn and improve with effort</li><li style=\"margin-bottom: 4px;\"><strong>Optimism</strong> – Holding a positive outlook on outcomes</li><li style=\"margin-bottom: 4px;\"><strong>Locus of control</strong> – Believing you can influence events in your life</li></ul><p style=\"margin-bottom: 0;\"><strong>Why they matter:</strong> Beliefs shape your confidence, resilience, and how you interpret challenges.</p></div><div class=\"modal-sublist-title\">Attitudes</div><div class=\"modal-text\"><p style=\"margin-bottom: 8px;\"><strong>What they are:</strong> A predisposition to respond positively or negatively to specific people, situations, or ideas. Attitudes influence your behaviour and interactions.</p><p style=\"margin-bottom: 4px; font-weight: 500;\">Examples:</p><ul style=\"margin: 0 0 8px 16px; padding: 0; list-style-type: disc;\"><li style=\"margin-bottom: 4px;\"><strong>Positive attitude</strong> – Approaching situations with optimism and enthusiasm</li><li style=\"margin-bottom: 4px;\"><strong>Open-mindedness</strong> – Being receptive to new ideas and perspectives</li><li style=\"margin-bottom: 4px;\"><strong>Empathy</strong> – Understanding and sharing the feelings of others</li><li style=\"margin-bottom: 4px;\"><strong>Prejudice</strong> – Holding biased views toward certain groups (negative attitude)</li></ul><p style=\"margin-bottom: 0;\"><strong>Why they matter:</strong> Attitudes affect team morale, collaboration, and how colleagues perceive you.</p></div><div class=\"modal-sublist-title\">Character</div><div class=\"modal-text\"><p style=\"margin-bottom: 8px;\"><strong>What they are:</strong> The moral and ethical qualities that define your overall integrity and reputation. Character is demonstrated through consistent actions over time.</p><p style=\"margin-bottom: 4px; font-weight: 500;\">Examples:</p><ul style=\"margin: 0 0 8px 16px; padding: 0; list-style-type: disc;\"><li style=\"margin-bottom: 4px;\"><strong>Trustworthiness</strong> – Being reliable, honest, and keeping promises</li><li style=\"margin-bottom: 4px;\"><strong>Respectfulness</strong> – Treating others with kindness and consideration</li><li style=\"margin-bottom: 4px;\"><strong>Responsibility</strong> – Taking ownership of your actions and their consequences</li><li style=\"margin-bottom: 4px;\"><strong>Fairness</strong> – Treating others equitably without bias</li><li style=\"margin-bottom: 4px;\"><strong>Courage</strong> – Standing up for what is right, even when difficult</li></ul><p style=\"margin-bottom: 0;\"><strong>Why it matters:</strong> Character is what people remember about you. It builds trust and credibility.</p></div><div class=\"modal-sublist-title\">Johari Window and Self-Awareness</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">The Johari Window is a model used to improve self-awareness and interpersonal relationships.</p><div class=\"modal-sublist-title\">It consists of four areas:</div><div class=\"modal-sublist-title\">Open Area</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Information known to both oneself and others.</p><div class=\"modal-sublist-title\">Blind Area</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Characteristics recognized by others but not by oneself.</p><div class=\"modal-sublist-title\">Hidden Area</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Information known to oneself but not shared with others.</p><div class=\"modal-sublist-title\">Unknown Area</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Qualities and potential that remain undiscovered by both oneself and others.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">The objective is to expand the Open Area by seeking feedback and engaging in open communication.</p>",
      "interactiveActivity": "During the session, we participated in activities that encouraged us to identify and classify our skills into technical, soft, and transferable categories. We also reflected on our personal values and discussed how they influence our behaviour in academic and professional settings. Additionally, we explored the Johari Window model and considered how feedback from others can help us discover strengths and areas for improvement that we may not recognize ourselves. These activities provided an opportunity for self-reflection and helped me better understand the importance of self-awareness in professional development.",
      "body": "Before attending this session, I believed professional success was primarily dependent on technical knowledge and academic performance. However, I learned that employers also place significant value on interpersonal skills, communication abilities, leadership qualities, and adaptability. The discussion on values, beliefs, attitudes, and character encouraged me to reflect on the qualities that shape my own behaviour and decision-making. It made me realize that professional growth involves not only acquiring new skills but also developing personal qualities that contribute to positive workplace relationships. The Johari Window activity was particularly insightful because it demonstrated that there may be strengths and weaknesses that others can recognize more clearly than we can ourselves. This highlighted the importance of seeking feedback and remaining open to personal development. As an aspiring IT professional, I understand that self-awareness and professional skills are essential for effective teamwork, leadership, and career growth.",
      "action": "• The knowledge gained from this session will support both my academic and professional development.\n• To apply these concepts:\n• I will continue improving my communication and teamwork skills through group projects and presentations.\n• I will actively seek constructive feedback from lecturers, peers, and mentors to improve my self-awareness.\n• I will identify and develop both my technical and transferable skills to enhance my employability.\n• I will reflect on my personal values and ensure they are reflected in my academic and professional conduct.\n• I will use self-assessment techniques to monitor my progress and identify areas for continuous improvement.",
      "galleryItems": [
        "Assets/3-skills_1.jpg",
        "Assets/3-skills_2.png",
        "Assets/3-skills_3.png",
        "Assets/3-skills_4.png"
      ],
      "galleryFigure": "Figure 3: Participation in the Professional Skills and Self-Awareness session conducted by Ms. Oshani.",
      "keyTakeaway": "This session demonstrated that professional success requires a combination of technical expertise, interpersonal abilities, and self-awareness. It reinforced the importance of understanding one's strengths, values, and behaviours while continuously seeking opportunities for growth and improvement. Most importantly, I learned that developing professional skills is an ongoing process that plays a crucial role in achieving both personal and career success."
    }
  },
  {
    "n": "04",
    "title": "Emotional Intelligence (EQ)",
    "dotClass": "dt",
    "cat": "com",
    "tag": "EQ",
    "reflection": {
      "resource": "Ms. Nilusha Ariasena",
      "date": "4 February 2026",
      "quote": {
        "text": "Anyone can become angry-that is easy. But to be angry with the right person, to the right degree, at the right time, for the right purpose, and in the right way-this is not easy.",
        "author": "Aristotle"
      },
      "overview": "This session focused on Emotional Intelligence (EQ), a crucial skill that influences how individuals understand, manage, and express emotions while interacting effectively with others. The session highlighted the growing importance of emotional intelligence in both personal and professional environments and emphasized that success is not determined solely by intelligence quotient (IQ), but also by an individual's ability to navigate emotions, build relationships, and respond appropriately to challenges. Through discussions, practical examples, and self-assessment activities, the session provided valuable insights into the role of emotional intelligence in leadership, teamwork, communication, and career success.",
      "keyLearningsHtml": "<div class=\"modal-sublist-title\">What is Emotional Intelligence?</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Emotional Intelligence refers to the ability to recognize, understand, manage, and effectively use emotions in ourselves and others. It enables individuals to communicate constructively, build positive relationships, and make balanced decisions.</p><div class=\"modal-sublist-title\">Emotional intelligence plays a significant role in:</div><div class=\"modal-sublist-title\">Effective communication</div><div class=\"modal-sublist-title\">Team collaboration</div><div class=\"modal-sublist-title\">Conflict resolution</div><div class=\"modal-sublist-title\">Leadership development</div><div class=\"modal-sublist-title\">Personal well-being</div><div class=\"modal-sublist-title\">Importance of Emotional Intelligence</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">The session emphasized that emotional intelligence is often a stronger predictor of professional and personal success than cognitive intelligence alone.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Individuals with high emotional intelligence are more likely to:</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Build strong relationships.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Handle stress effectively.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Adapt to change.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Demonstrate resilience during challenges.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Lead and motivate others successfully.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">In modern workplaces, emotional intelligence contributes significantly to employee engagement, workplace culture, and team performance.</p><div class=\"modal-sublist-title\">The Five Components of Emotional Intelligence</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">The session introduced Daniel Goleman's model of Emotional Intelligence, which consists of five key components.</p><div class=\"modal-sublist-title\">Self-Awareness</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">The ability to recognize and understand one's emotions, strengths, weaknesses, and their impact on others.</p><div class=\"modal-sublist-title\">Self-Regulation</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">The ability to manage emotions, control impulses, and respond appropriately to situations.</p><div class=\"modal-sublist-title\">Motivation</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">The internal drive to pursue goals with enthusiasm, persistence, and commitment despite obstacles.</p><div class=\"modal-sublist-title\">Empathy</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">The ability to understand and appreciate the feelings, perspectives, and experiences of others.</p><div class=\"modal-sublist-title\">Social Skills</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">The ability to build relationships, communicate effectively, influence others, and manage conflicts constructively.</p><div class=\"modal-sublist-title\">Emotional Intelligence vs Intelligence Quotient (IQ)</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">The session explored the differences between IQ and EQ.</p><div class=\"modal-sublist-title\">IQ</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Measures cognitive abilities.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Focuses on reasoning, logic, and analytical thinking.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Often associated with academic performance.</p><div class=\"modal-sublist-title\">EQ</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Measures emotional and social competencies.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Focuses on understanding emotions and interpersonal relationships.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Can be developed and improved through practice and self-awareness.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">One of the most significant lessons from the session was that emotional intelligence is not fixed and can be strengthened over time through conscious effort and reflection.</p><div class=\"modal-sublist-title\">Strategies for Emotional Regulation</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Several techniques were introduced to help individuals manage emotions effectively:</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Identifying and naming emotions.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Understanding emotional triggers.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Practicing mindfulness and meditation.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Reflective journaling.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Seeking support through communication.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Taking breaks when feeling overwhelmed.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">These strategies help individuals respond thoughtfully rather than react impulsively during challenging situations.</p>",
      "interactiveActivity": "As part of the session, we completed the Truity Emotional Intelligence assessment, which evaluated different aspects of emotional intelligence, including self-awareness, social awareness, emotional control, empathy, and emotional well-being. The activity encouraged us to reflect on our emotional strengths and identify areas that require further development. We also participated in discussions about emotional regulation techniques and explored practical ways of applying emotional intelligence in everyday situations. This exercise helped me better understand my emotional tendencies and the importance of continuously developing emotional awareness and self-management skills.",
      "body": "Before attending this session, I believed that professionalism required individuals to suppress their emotions and focus solely on logical thinking. However, this session helped me understand that emotional intelligence is not about ignoring emotions but about managing them effectively and using them constructively. I found it particularly interesting that emotional intelligence can often influence success more significantly than IQ. This challenged my previous perception that academic achievement and technical skills alone determine professional success. The Truity Emotional Intelligence assessment provided valuable insights into my own emotional strengths and areas for improvement. It encouraged me to reflect on how I respond to challenges, communicate with others, and manage stressful situations. As someone preparing for future internships and professional responsibilities, I now recognize that emotional intelligence is essential for building strong workplace relationships, collaborating effectively within teams, and becoming a successful leader.",
      "action": "• The lessons learned during this session have practical applications in both my academic and professional life.\n• To apply these concepts:\n• I will practise greater self-awareness by reflecting on my emotional responses to different situations.\n• I will use emotional regulation strategies when dealing with stress, frustration, or conflict.\n• I will improve my empathy by actively listening to others and considering different perspectives.\n• I will seek feedback from peers and mentors to strengthen my self-awareness.\n• I will develop stronger interpersonal and communication skills to enhance teamwork and collaboration.\n• I will continue monitoring my emotional growth through regular self-reflection and journaling.",
      "galleryItems": [
        "Assets/4-eq_1.jpeg",
        "Assets/4-eq_2.jpeg",
        "Assets/4-eq_3.png",
        "Assets/4-eq_4.webp",
        "Assets/4-eq_5.webp",
        "Assets/4-eq_6.webp"
      ],
      "galleryFigure": "Figure 4: Participation in the Emotional Intelligence session conducted by Ms. Nilusha Ariasena.",
      "keyTakeaway": "This session demonstrated that emotional intelligence is a fundamental skill for personal growth, professional success, and effective leadership. It highlighted the importance of understanding and managing emotions while building meaningful relationships with others. Most importantly, I learned that emotional intelligence is not an innate talent possessed by only a few individuals; it is a skill that can be continuously developed through self-awareness, reflection, empathy, and practice."
    }
  },
  {
    "n": "05",
    "title": "CV Writing & Cover Letters",
    "dotClass": "dk",
    "cat": "ldr",
    "tag": "CV & Resume",
    "reflection": {
      "resource": "Ms. Anuththara Ekenayake",
      "date": "9 February 2026",
      "quote": {
        "text": "You never get a second chance to make a first impression.",
        "author": "Will Rogers"
      },
      "overview": "This session focused on the development of effective Curriculum Vitae (CV) writing and cover letter preparation skills. It highlighted the importance of presenting oneself professionally through well-structured, concise, and tailored application documents. The session emphasized that a CV is often the first point of contact between a candidate and an employer, making it a critical factor in securing interviews and career opportunities. The discussion also covered how modern recruitment systems, such as Applicant Tracking Systems (ATS), influence how CVs are screened and the importance of adapting documents accordingly.",
      "keyLearningsHtml": "<div class=\"modal-sublist-title\">What is a CV?</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">A Curriculum Vitae (CV) is a formal document that summarizes an individual's education, skills, work experience, and achievements. Its main purpose is to demonstrate suitability for a specific job role.</p><div class=\"modal-sublist-title\">Purpose of a CV</div><div class=\"modal-sublist-title\">A CV is used to:</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Secure interview opportunities.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Create a strong first impression.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Present qualifications and skills in a structured format.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Differentiate candidates in competitive job markets.</p><div class=\"modal-sublist-title\">CV Structure and Formatting</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">An effective CV should follow a clear and professional structure:</p><div class=\"modal-sublist-title\">Simple and clean layout</div><div class=\"modal-sublist-title\">Clear section headings</div><div class=\"modal-sublist-title\">Consistent formatting throughout</div><div class=\"modal-sublist-title\">Professional fonts (Arial, Calibri, Times New Roman)</div><div class=\"modal-sublist-title\">Appropriate use of white space</div><div class=\"modal-sublist-title\">Ideally 1–2 pages for entry-level candidates</div><div class=\"modal-sublist-title\">Essential Components of a CV</div><div class=\"modal-sublist-title\">Personal Information</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Includes name, contact details, email address, and optional LinkedIn profile or portfolio link.</p><div class=\"modal-sublist-title\">Professional Summary</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">A brief 2–3 line statement summarizing career goals, key strengths, and suitability for the role.</p><div class=\"modal-sublist-title\">Work Experience</div><div class=\"modal-sublist-title\">Listed in reverse chronological order</div><div class=\"modal-sublist-title\">Includes job title, organization, and dates</div><div class=\"modal-sublist-title\">Uses action verbs (e.g., developed, managed, implemented)</div><div class=\"modal-sublist-title\">Includes measurable achievements where possible</div><div class=\"modal-sublist-title\">Education</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Academic qualifications, institutions attended, and relevant coursework.</p><div class=\"modal-sublist-title\">Skills</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">A combination of technical (hard) skills and interpersonal (soft) skills.</p><div class=\"modal-sublist-title\">Achievements & Certifications</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Awards, recognitions, and professional certifications that support employability.</p><div class=\"modal-sublist-title\">Tailoring a CV</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">One of the most important lessons from the session was the need to tailor CVs for each job application. This involves:</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Analyzing job descriptions carefully.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Identifying relevant keywords.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Highlighting matching skills and experiences.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Adjusting the professional summary accordingly.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Tailored CVs increase the chances of passing Applicant Tracking Systems (ATS) and being shortlisted for interviews.</p><div class=\"modal-sublist-title\">Cover Letter Writing</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">A cover letter is a supporting document that introduces the CV and explains why the candidate is suitable for the role.</p><div class=\"modal-sublist-title\">Structure of a Cover Letter</div><div class=\"modal-sublist-title\">Paragraph 1: Introduction and job reference</div><div class=\"modal-sublist-title\">Paragraph 2: Qualifications and suitability</div><div class=\"modal-sublist-title\">Paragraph 3: Relevant experience and skills</div><div class=\"modal-sublist-title\">Paragraph 4: Motivation and interest in the role</div><div class=\"modal-sublist-title\">Paragraph 5: Closing statement and interview request</div><div class=\"modal-sublist-title\">Common CV Mistakes</div><div class=\"modal-sublist-title\">Spelling and grammatical errors</div><div class=\"modal-sublist-title\">Including irrelevant or outdated information</div><div class=\"modal-sublist-title\">Poor formatting and inconsistency</div><div class=\"modal-sublist-title\">Lack of clarity and structure</div><div class=\"modal-sublist-title\">Using overly complex or decorative designs</div>",
      "interactiveActivity": "During the session, we analyzed sample CVs and identified common mistakes in formatting and content. We also completed exercises matching CV components and practiced drafting cover letter sections. These activities helped me understand the difference between academic-style CVs and professional, industry-standard CVs, as well as the importance of tailoring application documents for specific roles.",
      "body": "Before this session, I believed that a CV was simply a list of academic qualifications and experiences. However, I learned that a CV is a strategic marketing document designed to present an individual's strengths in alignment with job requirements. I also realized that including unnecessary or irrelevant information can reduce the effectiveness of a CV. The concept of tailoring a CV for each job application was particularly valuable, as it showed how employers look for specific keywords and competencies. Additionally, I gained a clear understanding of how cover letters complement CVs by providing a personalized introduction and demonstrating motivation for the role. As an IT student preparing for internships and future employment, I now understand the importance of presenting myself professionally through well-structured, concise, and targeted application documents.",
      "action": "• The knowledge gained from this session will be directly applied to my career preparation.\n• To implement these concepts:\n• I will redesign my CV using an ATS-friendly format.\n• I will create a tailored professional summary for different job roles.\n• I will use action verbs and measurable achievements in my experience section.\n• I will prepare a reusable cover letter template that can be adapted for different applications.\n• I will ensure my CV remains concise, structured, and free from errors.\n• I will upload my CV to my web-based portfolio for easy access.",
      "galleryItems": [
        "Assets/5-cv_1.png",
        "Assets/5-cv_2.png",
        "Assets/5-cv_3.png",
        "Assets/5-cv_4.png"
      ],
      "galleryFigure": "Figure 5: Participation in the CV Writing and Cover Letter session conducted by Ms. Anuththara Ekenayake.",
      "keyTakeaway": "This session reinforced that a CV is not merely a summary of experiences but a carefully designed professional document that represents personal branding and employability. It highlighted the importance of clarity, relevance, and customization in job applications. Most importantly, I learned that a strong CV combined with a well-written cover letter significantly increases the chances of securing interviews and career opportunities."
    }
  },
  {
    "n": "06",
    "title": "Research Skills for Professionals",
    "dotClass": "dp",
    "cat": "emp",
    "tag": "Research",
    "reflection": {
      "resource": "Dr. Janaka Alawathugoda",
      "date": "17 February 2026",
      "quote": {
        "text": "Research is creating new knowledge.",
        "author": "Neil Armstrong"
      },
      "overview": "This session introduced the concept of research writing as a structured and purposeful process used not only in academic work but also in real-world problem-solving. The key emphasis of the session was that research is not simply about collecting information, but about identifying problems, analysing existing knowledge, and developing well-supported solutions. The session also highlighted the importance of creativity in research, proper structuring of research documents, and ethical practices such as avoiding plagiarism through correct referencing.",
      "keyLearningsHtml": "<div class=\"modal-sublist-title\">What is Research Writing?</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Research writing is a systematic process of collecting, analysing, interpreting, and presenting information in a structured and evidence-based manner. It is used to explore problems, generate insights, and support decision-making.</p><div class=\"modal-sublist-title\">Purpose of Research</div><div class=\"modal-sublist-title\">Research is conducted to:</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Develop a deeper understanding of a problem.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Identify gaps in existing knowledge.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Propose and evaluate possible solutions.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Support decisions with evidence rather than assumptions.</p><div class=\"modal-sublist-title\">Creativity in Research</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">A key takeaway from this session was that research is not purely logical or repetitive; it also requires creativity. Creativity is needed when:</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Defining a clear and meaningful problem statement.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Designing a suitable research approach or methodology.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Identifying relevant literature and interpreting findings.</p><div class=\"modal-sublist-title\">Structure of a Research Paper</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">A standard research paper typically consists of the following components:</p><div class=\"modal-sublist-title\">Introduction</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Provides background information, context, and the purpose of the research.</p><div class=\"modal-sublist-title\">Literature Review</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Examines existing studies and identifies gaps in knowledge.</p><div class=\"modal-sublist-title\">Methodology</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Explains the methods used for data collection and analysis.</p><div class=\"modal-sublist-title\">Findings and Analysis</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Presents results and interprets their meaning.</p><div class=\"modal-sublist-title\">Conclusion</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Summarizes key findings and their implications.</p><div class=\"modal-sublist-title\">References</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Lists all sources used in the research, ensuring academic integrity.</p><div class=\"modal-sublist-title\">Research Proposal Structure</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">A research proposal acts as a blueprint for conducting research. It includes:</p><div class=\"modal-sublist-title\">Project plan and objectives</div><div class=\"modal-sublist-title\">Required resources and budget (if applicable)</div><div class=\"modal-sublist-title\">Methodology and approach</div><div class=\"modal-sublist-title\">Data collection methods</div><div class=\"modal-sublist-title\">Evaluation criteria and expected outcomes</div><div class=\"modal-sublist-title\">Academic Integrity and Plagiarism</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">The session emphasized the importance of ethical research practices. Plagiarism occurs when someone presents another person's work or ideas as their own without proper acknowledgment.</p><div class=\"modal-sublist-title\">To avoid plagiarism:</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Always cite sources properly.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Use recognized referencing styles such as APA or Harvard.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Credit all ideas, data, and materials taken from external sources.</p>",
      "interactiveActivity": "During the session, we discussed the structure of research papers and analyzed how research is used in both academic and professional contexts. We explored example research topics and examined how a research proposal is developed from identifying a problem to defining a methodology. We also discussed the importance of proper referencing and the consequences of plagiarism in academic work. These activities helped me understand that research is not just theoretical but a practical skill that supports decision-making and problem-solving in real-world scenarios, especially in the field of Information Technology.",
      "body": "Before this session, I believed that research was mainly an academic requirement limited to scientists and postgraduate students. However, I now understand that research is a practical and essential skill used in everyday decision-making and professional environments. I learned that even in IT-related tasks, research plays an important role. For example, choosing between technologies, frameworks, or tools requires evaluating multiple sources of information before making a decision. The idea that research requires creativity was particularly insightful, as I previously thought it was a rigid and structured process. In reality, defining the right problem and selecting the appropriate methodology require critical and creative thinking. I also gained a clearer understanding of academic integrity and the importance of referencing sources properly to avoid plagiarism.",
      "action": "• The knowledge gained from this session can be applied in both academic and professional contexts.\n• To apply this learning:\n• I will conduct preliminary research before starting any technical or academic project.\n• I will develop simple research proposals before group assignments to clearly define objectives and methods.\n• I will practice writing abstracts for my projects to improve my ability to summarize work concisely.\n• I will use proper referencing (APA or Harvard) when including external sources in my portfolio or reports.\n• I will evaluate multiple sources before making decisions in technical problem-solving.",
      "galleryItems": [
        "Assets/6-research_1.png",
        "Assets/6-research_2.webp",
        "Assets/6-research_3.png",
        "Assets/6-research_4.png"
      ],
      "galleryFigure": "Figure 6: Participation in the Research Writing and Problem-Solving session conducted by Dr. Janaka Alawathugoda.",
      "keyTakeaway": "This session reinforced that research is a structured and creative process used to solve problems and support decision-making with evidence. It highlighted the importance of planning, proper methodology, critical thinking, and academic integrity. Most importantly, I learned that research is not limited to academia but is a valuable skill in professional fields such as Information Technology, where informed decisions are essential for successful outcomes."
    }
  },
  {
    "n": "07",
    "title": "Effective Agendas, Minutes & Meeting Facilitation",
    "dotClass": "dt",
    "cat": "ldr",
    "tag": "Meetings",
    "reflection": {
      "resource": "Ms. Sathsarani Samarakoon",
      "date": "24 March 2026",
      "quote": {
        "text": "A meeting without an agenda is just a conversation without direction.",
        "author": "Paul Axtell"
      },
      "overview": "This session focused on developing essential workplace communication and coordination skills, specifically writing effective meeting agendas and conducting structured meetings. The session emphasized that meetings are a core part of professional environments and must be carefully planned to ensure productivity and clear decision-making. A key takeaway was that structured meetings supported by clear agendas help teams stay focused, manage time efficiently, and ensure accountability for decisions and actions.",
      "keyLearningsHtml": "<div class=\"modal-sublist-title\">What is a Meeting?</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">A meeting is a structured or informal gathering where individuals come together to discuss ideas, share information, and make decisions related to a specific purpose or objective.</p><div class=\"modal-sublist-title\">Types of Meetings</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">The session introduced different types of workplace meetings, including:</p><p>1. Staff Meetings</p><p>Project Meetings</p><p>Planning Meetings</p><p>Review Meetings</p><p>Problem Solving Meetings</p><div class=\"modal-sublist-title\">Staff meetings</div><div class=\"modal-sublist-title\">Project meetings</div><div class=\"modal-sublist-title\">Planning meetings</div><div class=\"modal-sublist-title\">Review meetings</div><div class=\"modal-sublist-title\">Problem-solving meetings</div><div class=\"modal-sublist-title\">What is an Agenda?</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">An agenda is a formal document that outlines the topics to be discussed during a meeting in a structured and organized manner.</p><div class=\"modal-sublist-title\">It serves several important purposes:</div><div class=\"modal-sublist-title\">Provides clear direction for the meeting</div><div class=\"modal-sublist-title\">Helps manage time effectively</div><div class=\"modal-sublist-title\">Ensures all relevant topics are covered</div><div class=\"modal-sublist-title\">Improves productivity and focus</div><div class=\"modal-sublist-title\">Components of an Effective Agenda</div><div class=\"modal-sublist-title\">A formal agenda typically includes:</div><div class=\"modal-sublist-title\">Meeting title and organization name</div><div class=\"modal-sublist-title\">Date, time, and venue</div><div class=\"modal-sublist-title\">List of agenda items in logical order</div><div class=\"modal-sublist-title\">Time allocation for each item</div><div class=\"modal-sublist-title\">Names or roles of participants</div><div class=\"modal-sublist-title\">Opening and welcome note</div><div class=\"modal-sublist-title\">Any Other Business (AOB)</div><div class=\"modal-sublist-title\">Closing statement</div><div class=\"modal-sublist-title\">Formal Agenda Structure</div><div class=\"modal-sublist-title\">A standard agenda follows a structured format:</div><div class=\"modal-sublist-title\">Confirmation of previous meeting minutes</div><div class=\"modal-sublist-title\">Discussion of agenda items</div><div class=\"modal-sublist-title\">Review of progress or reports</div><div class=\"modal-sublist-title\">Any Other Business (AOB)</div><div class=\"modal-sublist-title\">Closing of the meeting</div><div class=\"modal-sublist-title\">Roles in a Meeting</div><div class=\"modal-sublist-title\">Chairperson</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Responsible for leading the meeting, managing time, guiding discussions, and ensuring objectives are achieved.</p><div class=\"modal-sublist-title\">Secretary</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Responsible for preparing the agenda, recording minutes, and documenting key decisions and action points.</p><div class=\"modal-sublist-title\">Participants</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Responsible for contributing ideas, engaging in discussions, and respecting meeting procedures.</p><div class=\"modal-sublist-title\">Meeting Minutes</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Minutes are a formal written record of a meeting that captures key decisions, discussions, and action items.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">They are not a word-for-word transcript but a summary focusing on:</p><div class=\"modal-sublist-title\">Decisions made</div><div class=\"modal-sublist-title\">Tasks assigned</div><div class=\"modal-sublist-title\">Deadlines and responsibilities</div><div class=\"modal-sublist-title\">Meeting Etiquette</div><div class=\"modal-sublist-title\">Professional meeting behaviour includes:</div><div class=\"modal-sublist-title\">Being punctual</div><div class=\"modal-sublist-title\">Staying on topic</div><div class=\"modal-sublist-title\">Listening actively</div><div class=\"modal-sublist-title\">Respecting others' opinions</div><div class=\"modal-sublist-title\">Avoiding interruptions and side discussions</div>",
      "interactiveActivity": "During the session, we participated in a mock meeting activity where we were divided into groups and assigned different roles such as Chairperson, Secretary, and Participants. Each group was given a scenario (such as planning a university event or organizing a group activity) and was required to conduct a formal meeting using a structured agenda. This activity provided hands-on experience in real-time communication, decision-making, and documentation through meeting minutes.",
      "body": "Before this session, I assumed that meetings were informal discussions without a fixed structure. However, I learned that effective meetings require careful planning, clear objectives, and structured documentation. The mock meeting activity helped me understand the importance of roles such as Chairperson and Secretary. While acting as a participant, I realized how important it is to stay focused on agenda items and contribute meaningfully to discussions. I also understood that meeting minutes are not just notes, but an important record of decisions and responsibilities that ensure accountability within a team. This session improved my understanding of workplace communication and highlighted how structured meetings contribute to better teamwork and productivity.",
      "action": "• The skills gained from this session can be applied in both academic and professional settings.\n• To apply this learning:\n• I will prepare formal agendas before group discussions or project meetings.\n• I will practice writing structured meeting minutes focusing on decisions and action points.\n• I will take on leadership roles such as Chairperson or Secretary in future group activities.\n• I will ensure meetings I participate in remain focused and time-efficient.\n• I will include sample agendas and meeting minutes in my portfolio as evidence of practical learning.",
      "galleryItems": [
        "Assets/7-meeting_1.png",
        "Assets/7-meeting_2.png",
        "Assets/7-meeting_3.png",
        "Assets/7-meeting_4.png"
      ],
      "galleryFigure": "Figure 7: Participation in the Agendas and Meetings session conducted by Ms. Sathsarani Samarakoon.",
      "keyTakeaway": "This session demonstrated that structured communication is essential in professional environments. Well-prepared agendas and properly documented meeting minutes improve efficiency, accountability, and teamwork. Most importantly, I learned that effective meetings are not spontaneous discussions but well-organized processes that require planning, discipline, and collaboration."
    }
  },
  {
    "n": "08",
    "title": "Negotiation Skills",
    "dotClass": "dk",
    "cat": "com",
    "tag": "Negotiation",
    "reflection": {
      "resource": "Ms. Lelani Kandegama",
      "date": "24 March 2026",
      "quote": {
        "text": "You don't get what you deserve, you get what you negotiate.",
        "author": "Chester L. Karrass"
      },
      "overview": "This session introduced negotiation as a structured professional skill used to reach agreements between individuals or groups with differing interests. The focus was not limited to business environments but extended to everyday academic and workplace situations such as task allocation, conflict resolution, and decision-making within teams. A key takeaway from the session was that effective negotiation is not about \"winning,\" but about creating value and reaching mutually beneficial outcomes through communication, preparation, and understanding of interests.",
      "keyLearningsHtml": "<div class=\"modal-sublist-title\">What is Negotiation?</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Negotiation is a structured process where two or more parties with different needs or objectives communicate to reach a mutually acceptable agreement.</p><div class=\"modal-sublist-title\">It involves:</div><div class=\"modal-sublist-title\">Communication</div><div class=\"modal-sublist-title\">Compromise</div><div class=\"modal-sublist-title\">Problem-solving</div><div class=\"modal-sublist-title\">Decision-making</div><div class=\"modal-sublist-title\">Why Negotiation is Important</div><div class=\"modal-sublist-title\">Negotiation is essential because it helps:</div><div class=\"modal-sublist-title\">Resolve conflicts</div><div class=\"modal-sublist-title\">Allocate resources fairly</div><div class=\"modal-sublist-title\">Achieve shared goals</div><div class=\"modal-sublist-title\">Build long-term professional relationships</div><div class=\"modal-sublist-title\">Improve collaboration in teams</div><div class=\"modal-sublist-title\">Types of Negotiation</div><div class=\"modal-sublist-title\">Distributive (Win-Lose)</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">A fixed outcome situation where one party's gain is another party's loss.</p><div class=\"modal-sublist-title\">Integrative (Win-Win)</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">A collaborative approach where both parties benefit by finding mutually valuable solutions.</p><div class=\"modal-sublist-title\">Compromise</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Each party gives up something to reach a middle-ground agreement.</p><div class=\"modal-sublist-title\">Collaborative</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">A trust-based approach focused on long-term cooperation and shared success.</p><div class=\"modal-sublist-title\">Competitive</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">A more assertive approach where one party prioritizes its own interests.</p><div class=\"modal-sublist-title\">Core Negotiation Concepts</div><div class=\"modal-sublist-title\">BATNA (Best Alternative to a Negotiated Agreement)</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">BATNA refers to the best option available if an agreement cannot be reached.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">A strong BATNA increases negotiation confidence and bargaining power.</p><div class=\"modal-sublist-title\">ZOPA (Zone of Possible Agreement)</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">ZOPA is the range in which both parties' acceptable outcomes overlap, allowing a successful agreement to be reached.</p><p class=\"modal-text\" style=\"margin-bottom: 8px;\">If no ZOPA exists, negotiation cannot result in an agreement.</p><div class=\"modal-sublist-title\">Negotiation Process</div><div class=\"modal-sublist-title\">The structured negotiation process includes:</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Preparation – defining goals, BATNA, and understanding the other party</p><div class=\"modal-sublist-title\">Opening – presenting initial positions</div><div class=\"modal-sublist-title\">Exploration – identifying interests through discussion</div><div class=\"modal-sublist-title\">Bargaining – making offers and concessions</div><div class=\"modal-sublist-title\">Closing – finalizing agreement</div><div class=\"modal-sublist-title\">Reflection – evaluating outcomes for future improvement</div><div class=\"modal-sublist-title\">Key Principles of Effective Negotiation</div><div class=\"modal-sublist-title\">Separate people from the problem</div><div class=\"modal-sublist-title\">Focus on interests, not positions</div><div class=\"modal-sublist-title\">Aim for win-win solutions</div><div class=\"modal-sublist-title\">Use objective reasoning</div><div class=\"modal-sublist-title\">Maintain professionalism and respect</div><div class=\"modal-sublist-title\">Common Mistakes in Negotiation</div><div class=\"modal-sublist-title\">Poor preparation</div><div class=\"modal-sublist-title\">Ignoring BATNA</div><div class=\"modal-sublist-title\">Emotional reactions during discussions</div><div class=\"modal-sublist-title\">Lack of active listening</div><div class=\"modal-sublist-title\">Failure to recognize when to walk away</div>",
      "interactiveActivity": "During the session, we participated in a group role-play negotiation activity. Each group was assigned a scenario involving decision-making tasks such as dividing project responsibilities or resolving resource conflicts. We applied negotiation strategies including identifying BATNA, understanding different interests, and attempting to reach a win-win outcome. This practical activity helped simulate real-world negotiation situations and demonstrated how communication and flexibility influence outcomes.",
      "body": "Before this session, I viewed negotiation as a formal process mainly used in business or financial contexts. However, I now understand that negotiation is a daily life skill used in academic, professional, and personal situations. The concept of BATNA was particularly valuable, as it helped me understand the importance of having a backup plan before entering any discussion or agreement. It provides confidence and clarity when making decisions. The role-play activity made the theory more practical. During the exercise, I realized that focusing on interests rather than fixed positions leads to more effective and fair outcomes for all parties involved. I also learned that successful negotiation is not about being aggressive or dominating, but about understanding perspectives, communicating clearly, and finding shared value.",
      "action": "• The knowledge gained from this session can be applied in both academic and professional environments.\n• To apply this learning:\n• I will always identify my BATNA before entering discussions or negotiations.\n• I will focus on understanding the interests behind other people's positions.\n• I will aim for win-win solutions rather than competitive outcomes.\n• I will remain calm and professional during disagreements.\n• I will practice negotiation scenarios with peers to improve confidence and communication.\n• I will reflect on real-life situations where negotiation skills are applied in group work.",
      "galleryItems": [
        "Assets/8-nego_1.png",
        "Assets/8-nego_2.png",
        "Assets/8-nego_3.png",
        "Assets/8-nego_4.jpg"
      ],
      "galleryFigure": "Figure 8: Participation in the Negotiation Skills session conducted by Ms. Lelani Kandegama.",
      "keyTakeaway": "This session demonstrated that negotiation is a structured and essential life skill that supports effective communication, collaboration, and decision-making. It emphasized the importance of preparation, understanding interests, and maintaining professionalism. Most importantly, I learned that successful negotiation is not about winning arguments, but about creating solutions that benefit all parties involved.Got it — here is Week 8 rewritten in the exact same format as your Week 7 example:"
    }
  },
  {
    "n": "09",
    "title": "Team Leadership Skills",
    "dotClass": "dp",
    "cat": "com",
    "tag": "Leadership",
    "reflection": {
      "resource": "Mr. Suresh Dissanayaka",
      "date": "31 March 2026",
      "quote": {
        "text": "Teamwork is not just about working together, but about helping each other achieve shared success.",
        "author": "Anonymous"
      },
      "overview": "This session focused on teamwork, interpersonal skills, and team leadership development. It explored how effective teams are formed, how they evolve over time, and how leadership influences team performance and collaboration. A key takeaway from the session was that effective teamwork is not simply dividing tasks among members, but actively supporting each other to achieve a shared goal. The session also included a practical hands-on activity where groups had to build the tallest possible structure using only two A4 sheets of paper, without any additional materials.",
      "keyLearningsHtml": "<div class=\"modal-sublist-title\">What is Teamwork?</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Teamwork is the ability of individuals to work together effectively to achieve a shared goal while maintaining accountability, communication, and mutual support.</p><div class=\"modal-sublist-title\">It involves:</div><div class=\"modal-sublist-title\">Communication</div><div class=\"modal-sublist-title\">Collaboration</div><div class=\"modal-sublist-title\">Responsibility</div><div class=\"modal-sublist-title\">Mutual respect</div><div class=\"modal-sublist-title\">Importance of Teamwork</div><div class=\"modal-sublist-title\">Teamwork is important because it:</div><div class=\"modal-sublist-title\">Enhances productivity through synergy (1+1 > 2)</div><div class=\"modal-sublist-title\">Encourages creativity and idea sharing</div><div class=\"modal-sublist-title\">Distributes workload effectively</div><div class=\"modal-sublist-title\">Improves problem-solving ability</div><div class=\"modal-sublist-title\">Builds trust and support among members</div><div class=\"modal-sublist-title\">Characteristics of Effective Teams</div><div class=\"modal-sublist-title\">Effective teams typically demonstrate:</div><div class=\"modal-sublist-title\">Clear communication</div><div class=\"modal-sublist-title\">Defined roles and responsibilities</div><div class=\"modal-sublist-title\">Strong leadership</div><div class=\"modal-sublist-title\">Mutual trust and respect</div><div class=\"modal-sublist-title\">Constructive feedback</div><div class=\"modal-sublist-title\">Shared goals and accountability</div><div class=\"modal-sublist-title\">Flexibility and adaptability</div><div class=\"modal-sublist-title\">Focus on solutions rather than problems</div><div class=\"modal-sublist-title\">Tuckman's Stages of Team Development</div><div class=\"modal-sublist-title\">Teams evolve through the following stages:</div><div class=\"modal-sublist-title\">Forming</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Team members are introduced and roles are unclear.</p><div class=\"modal-sublist-title\">Storming</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Conflicts arise due to differences in ideas and working styles.</p><div class=\"modal-sublist-title\">Norming</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Team members begin to cooperate and establish structure.</p><div class=\"modal-sublist-title\">Performing</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">The team works efficiently toward shared goals.</p><div class=\"modal-sublist-title\">Adjourning</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">The team completes the task and disbands.</p><div class=\"modal-sublist-title\">Leadership in Teams</div><p class=\"modal-text\" style=\"margin-bottom: 8px;\">Leadership is the ability to guide, support, and coordinate a team toward achieving its goals.</p><div class=\"modal-sublist-title\">An effective leader:</div><div class=\"modal-sublist-title\">Encourages participation from all members</div><div class=\"modal-sublist-title\">Resolves conflicts fairly</div><div class=\"modal-sublist-title\">Maintains focus on objectives</div><div class=\"modal-sublist-title\">Provides constructive feedback</div><div class=\"modal-sublist-title\">Helps the team move through development stages</div><div class=\"modal-sublist-title\">Builds confidence and trust within the group</div><div class=\"modal-sublist-title\">Conflict in Teams</div><div class=\"modal-sublist-title\">Team conflicts can arise due to:</div><div class=\"modal-sublist-title\">Miscommunication</div><div class=\"modal-sublist-title\">Differing opinions</div><div class=\"modal-sublist-title\">Unclear roles</div><div class=\"modal-sublist-title\">Competition for leadership or recognition</div><div class=\"modal-sublist-title\">Conflict Resolution Strategies</div><div class=\"modal-sublist-title\">Effective conflict management includes:</div><div class=\"modal-sublist-title\">Focusing on the problem, not the person</div><div class=\"modal-sublist-title\">Encouraging open communication</div><div class=\"modal-sublist-title\">Listening actively to all viewpoints</div><div class=\"modal-sublist-title\">Finding common ground</div><div class=\"modal-sublist-title\">Using collaborative decision-making</div>",
      "interactiveActivity": "During the session, we participated in a group challenge activity where each team was given only two A4 sheets of paper and instructed to build the tallest freestanding structure possible without using tape, glue, or scissors. This activity required: Team coordination under constraints Quick decision-making Leadership and role distribution Creativity in problem-solving Adaptability after failure The activity demonstrated how teamwork functions under pressure and how collaboration leads to better outcomes than individual effort.",
      "body": "Before this session, I believed teamwork simply meant dividing tasks among group members. However, I now understand that effective teamwork requires communication, trust, and active collaboration. During the paper structure activity, our first attempt failed due to lack of coordination. However, instead of blaming each other, we discussed improvements and redesigned our structure successfully. This helped me understand that failure is part of the team development process. I also learned that leadership is not about control or authority, but about guiding the team, encouraging participation, and ensuring everyone contributes effectively. I realized that I sometimes hesitate to speak during group discussions, and I need to improve my confidence in contributing ideas earlier.",
      "action": "• The knowledge gained from this session can be applied in academic and professional teamwork situations.\n• To apply this learning:\n• I will identify Tuckman's stages in future group projects\n• I will encourage equal participation from all team members\n• I will take initiative in small leadership roles\n• I will communicate ideas clearly and early\n• I will reflect on team performance after each group activity\n• I will focus on collaboration rather than individual recognition",
      "galleryItems": [
        "Assets/9-teams_1.png",
        "Assets/9-teams_2.jpg",
        "Assets/9-teams_3.jpg",
        "Assets/9-teams_4.png",
        "Assets/9-teams_5.jpeg"
      ],
      "galleryFigure": "Figure 8: Participation in the Team Leadership Skills session conducted by Mr. Suresh Dissanayaka.",
      "keyTakeaway": "This session demonstrated that teamwork is a structured process that evolves over time and requires communication, trust, and leadership. It emphasized that effective teams do not form instantly, but develop through stages and challenges. Most importantly, I learned that strong teamwork is built on collaboration, adaptability, and the willingness to support others in achieving shared goals."
    }
  }
];

/* Orbit layout: each orbit object lists which session indices it carries */
const ORBITS = [
  { radius: 110, speed: 26000, dir:  1, indices: [0, 3, 6] },
  { radius: 175, speed: 19000, dir: -1, indices: [1, 4, 7] },
  { radius: 260, speed: 36000, dir:  1, indices: [2, 5, 8] },
];

/* Canvas draw colours keyed by dotClass */
const DOT_RGBA = {
  dp: 'rgba(83,74,183,',
  dt: 'rgba(29,158,117,',
  dk: 'rgba(212,83,126,',
};


/* ════════════════════════════════════════════
   2. CUSTOM CURSOR
   ════════════════════════════════════════════ */
(function initCursor() {
  const cursor = document.getElementById('cursor');
  let rafId = null;
  let mx = -200, my = -200;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (!rafId) rafId = requestAnimationFrame(moveCursor);
  });

  function moveCursor() {
    cursor.style.transform = `translate(${mx}px,${my}px)`;
    rafId = null;
  }

  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });

  document.addEventListener('mouseover', e => {
    if (e.target.closest('.orbit-dot, .mode-toggle, .pill, .session-row, button, a')) {
      cursor.classList.add('hover');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('.orbit-dot, .mode-toggle, .pill, .session-row, button, a')) {
      cursor.classList.remove('hover');
    }
  });

  document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
  document.addEventListener('mouseup',   () => cursor.classList.remove('clicking'));
})();


/* ════════════════════════════════════════════
   3. DARK / LIGHT MODE TOGGLE
   ════════════════════════════════════════════ */
(function initModeToggle() {
  const btn   = document.getElementById('modeBtn');
  const label = document.getElementById('modeLabel');
  const body  = document.body;

  btn.addEventListener('click', () => {
    const isNowLight = body.classList.toggle('light');
    body.classList.toggle('dark', !isNowLight);
    label.textContent = isNowLight ? 'Dark mode' : 'Light mode';
  });
})();


/* ════════════════════════════════════════════
   4. ORBIT ANIMATION
   ════════════════════════════════════════════ */

/* Build per-session metadata (start angle, radius, speed, direction) */
const sessionMeta = new Array(SESSIONS.length);

ORBITS.forEach(orb => {
  const count = orb.indices.length;
  orb.indices.forEach((si, k) => {
    sessionMeta[si] = {
      radius:     orb.radius,
      speed:      orb.speed,
      dir:        orb.dir,
      startAngle: (2 * Math.PI / count) * k,
    };
  });
});

/* Create orbit dot DOM elements */
const orbitDotWrap = document.getElementById('orbitDotWrap');
const orbitDotEls  = SESSIONS.map((s, i) => {
  const wrap = document.createElement('div');
  wrap.className = 'orbit-dot-positioner';

  const el = document.createElement('div');
  el.className = `orbit-dot ${s.dotClass}`;
  el.innerHTML = `<span class="orbit-dot-label">${s.n} · ${s.title}</span>`;

  wrap.appendChild(el);
  orbitDotWrap.appendChild(wrap);
  return wrap;
});

/* Live computed orbit positions (filled each frame) */
const orbitPos = SESSIONS.map(() => ({ x: 0, y: 0 }));


/* ════════════════════════════════════════════
   5. TOC TIMELINE BUILDER
   ════════════════════════════════════════════ */
(function buildTimeline() {
  const tl = document.getElementById('timeline');

  const nodeClass = { emp: 'node-emp', com: 'node-com', ldr: 'node-ldr', pre: 'node-pre' };
  const tagClass  = { emp: 'tag-emp',  com: 'tag-com',  ldr: 'tag-ldr',  pre: 'tag-pre'  };

  SESSIONS.forEach((s, idx) => {
    const row  = document.createElement('div');
    row.className = `session-row cat-${s.cat}`;
    row.dataset.cat = s.cat;

    row.innerHTML = `
      <div class="tl-node ${nodeClass[s.cat]}"></div>
      <div class="session-card">
        <div class="card-top">
          <span class="session-num">${s.n}</span>
          <span class="session-tag ${tagClass[s.cat]}">${s.tag}</span>
        </div>
        <div class="card-bottom">
          <div class="session-title">${s.title}</div>
          <i class="ti ti-arrow-right card-arrow" aria-hidden="true"></i>
        </div>
      </div>`;

    row.addEventListener('click', () => {
      openReflectionModal(idx);
    });

    tl.appendChild(row);
  });
})();


/* ════════════════════════════════════════════
   6. FILTER PILLS
   ════════════════════════════════════════════ */
(function initFilterPills() {
  const filterPillsContainer = document.createElement('div');
  filterPillsContainer.className = 'filter-pills';
  filterPillsContainer.innerHTML = `
    <button class="pill pill-all active" data-filter="all">All</button>
    <button class="pill pill-emp" data-filter="emp">Workplace</button>
    <button class="pill pill-com" data-filter="com">Communication</button>
    <button class="pill pill-ldr" data-filter="ldr">Leadership</button>
  `;

  // Insert filter pills into the TOC header
  const tocWrapEl = document.getElementById('tocWrap');
  
  // Create TOC header div dynamically
  const headerDiv = document.createElement('div');
  headerDiv.className = 'toc-header';
  headerDiv.innerHTML = `
    <div>
      <div class="toc-kicker">Interactive Sessions</div>
      <h2 class="toc-title">Table of <em>Contents</em></h2>
    </div>
  `;
  headerDiv.appendChild(filterPillsContainer);
  tocWrapEl.insertBefore(headerDiv, document.getElementById('timeline'));

  const pills = filterPillsContainer.querySelectorAll('.pill');
  const rows  = document.querySelectorAll('.session-row');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.dataset.filter;
      rows.forEach(row => {
        if (filter === 'all' || row.dataset.cat === filter) {
          row.classList.remove('dimmed');
        } else {
          row.classList.add('dimmed');
        }
      });
      invalidateTimelineTargets();
    });
  });
})();


/* ════════════════════════════════════════════
   7. CANVAS MORPH
   ════════════════════════════════════════════ */
const canvas  = document.getElementById('morphCanvas');
const ctx     = canvas.getContext('2d');
const tocWrap = document.getElementById('tocWrap');

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  invalidateTimelineTargets();
}

/* Morph state */
let morphProgress = 0;
let isMorphing    = false;
let morphStart    = null;
const MORPH_DURATION = 1300;
let cachedTargets   = null;

function cacheTimelineTargets() {
  const nodes = document.querySelectorAll('.tl-node');
  const scroller = document.getElementById('scroller');
  const scrollTop = scroller ? scroller.scrollTop : 0;
  cachedTargets = Array.from(nodes).map(node => {
    const r = node.getBoundingClientRect();
    return {
      x: r.left + r.width  / 2,
      y: r.top  + r.height / 2 + scrollTop,
    };
  });
}

function invalidateTimelineTargets() {
  cachedTargets = null;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

let t0 = null;


/* ════════════════════════════════════════════
   PROSE PANEL FLOATING PARTICLES
   ════════════════════════════════════════════ */
function initProseCanvas(canvasId, wrapId) {
  const cvs = document.getElementById(canvasId);
  const wrap = document.getElementById(wrapId);
  if (!cvs) return { show: () => {}, hide: () => {} };

  const c = cvs.getContext('2d');
  let animId = null;
  let active = false;
  let fadeIn = 0;

  const COUNT = 38;
  const particles = Array.from({ length: COUNT }, () => ({
    x:  Math.random(),
    y:  Math.random(),
    r:  1.5 + Math.random() * 2.5,
    vx: (Math.random() - 0.5) * 0.00012,
    vy: (Math.random() - 0.5) * 0.00012,
    col: [
      'rgba(83,74,183,',
      'rgba(29,158,117,',
      'rgba(212,83,126,',
    ][Math.floor(Math.random() * 3)],
    a: 0.08 + Math.random() * 0.18,
  }));

  const rings = [
    { r: 0.18, a: 0.07 },
    { r: 0.28, a: 0.05 },
    { r: 0.40, a: 0.03 },
  ];

  function resize() {
    cvs.width  = window.innerWidth;
    cvs.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function drawFrame() {
    if (!active && fadeIn <= 0) { animId = null; return; }
    animId = requestAnimationFrame(drawFrame);

    fadeIn += active ? 0.025 : -0.035;
    fadeIn  = Math.max(0, Math.min(1, fadeIn));

    c.clearRect(0, 0, cvs.width, cvs.height);

    const W = cvs.width, H = cvs.height;
    const cx = W / 2, cy = H / 2;

    rings.forEach(rg => {
      c.beginPath();
      c.arc(cx, cy, rg.r * Math.min(W, H), 0, 2 * Math.PI);
      c.strokeStyle = `rgba(83,74,183,${rg.a * fadeIn})`;
      c.lineWidth = 0.75;
      c.stroke();
    });

    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = 1;
      if (p.x > 1) p.x = 0;
      if (p.y < 0) p.y = 1;
      if (p.y > 1) p.y = 0;

      c.beginPath();
      c.arc(p.x * W, p.y * H, p.r, 0, 2 * Math.PI);
      c.strokeStyle = `${p.col}${p.a * fadeIn})`;
      c.lineWidth = 1;
      c.stroke();
    });
  }

  return {
    show() {
      active = true;
      wrap.classList.add('visible');
      if (!animId) animId = requestAnimationFrame(drawFrame);
    },
    hide() {
      active = false;
      wrap.classList.remove('visible');
    },
  };
}

const ackAnim        = initProseCanvas('ackCanvas',        'ackWrap');
const journeyAnim    = initProseCanvas('journeyCanvas',    'journeyWrap');
const conclusionAnim = initProseCanvas('conclusionCanvas', 'conclusionWrap');


/* ════════════════════════════════════════════
   8. MAIN RENDER LOOP
   ════════════════════════════════════════════ */
function renderFrame(ts) {
  if (!t0) t0 = ts;
  const elapsed = ts - t0;

  const cx = canvas.width  / 2;
  const cy = canvas.height / 2;

  SESSIONS.forEach((s, i) => {
    const m   = sessionMeta[i];
    if (!m) return;
    const ang = m.startAngle + (elapsed * m.dir / m.speed) * 2 * Math.PI;
    orbitPos[i].x = cx + Math.cos(ang) * m.radius;
    orbitPos[i].y = cy + Math.sin(ang) * m.radius;

    if (morphProgress === 0) {
      orbitDotEls[i].style.transform =
        `translate(${orbitPos[i].x - cx}px, ${orbitPos[i].y - cy}px)`;
    }
  });

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (morphProgress === 0) {
    orbitDotEls.forEach(el => { el.style.opacity = '1'; });
    requestAnimationFrame(renderFrame);
    return;
  }

  if (!cachedTargets) {
    cacheTimelineTargets();
  }
  const scroller = document.getElementById('scroller');
  const scrollTop = scroller ? scroller.scrollTop : 0;
  const targets = cachedTargets.map(t => ({
    x: t.x,
    y: t.y - scrollTop,
  }));

  const ease = easeInOutCubic(morphProgress);

  const ringAlpha = Math.max(0, 1 - morphProgress * 2.2);
  if (ringAlpha > 0.01) {
    const rings = [
      { r: 110, a: 0.28 * ringAlpha },
      { r: 175, a: 0.22 * ringAlpha },
      { r: 260, a: 0.12 * ringAlpha },
    ];
    rings.forEach(rg => {
      ctx.beginPath();
      ctx.arc(cx, cy, rg.r, 0, 2 * Math.PI);
      ctx.strokeStyle = `rgba(83,74,183,${rg.a})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    });
  }

  SESSIONS.forEach((s, i) => {
    const ox = orbitPos[i].x;
    const oy = orbitPos[i].y;

    const tx = targets[i] ? targets[i].x : ox;
    const ty = targets[i] ? targets[i].y : oy;

    const dx = ox + (tx - ox) * ease;
    const dy = oy + (ty - oy) * ease;

    const col    = DOT_RGBA[s.dotClass];
    const dotAlpha = morphProgress > 0.78
      ? Math.max(0, 1 - (morphProgress - 0.78) / 0.22)
      : 1;

    if (morphProgress < 0.88 && dotAlpha > 0.05) {
      ctx.beginPath();
      ctx.moveTo(ox, oy);
      ctx.lineTo(dx, dy);
      ctx.strokeStyle = `${col}${0.1 * (1 - morphProgress)})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    if (dotAlpha > 0.02) {
      ctx.beginPath();
      ctx.arc(dx, dy, 6, 0, 2 * Math.PI);
      ctx.strokeStyle = `${col}${0.75 * dotAlpha})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(dx, dy, 3, 0, 2 * Math.PI);
      ctx.fillStyle = `${col}${0.45 * dotAlpha})`;
      ctx.fill();
    }
  });

  orbitDotEls.forEach(el => { el.style.opacity = '0'; });

  requestAnimationFrame(renderFrame);
}


/* ════════════════════════════════════════════
   SCROLL DETECTION — triggers morph
   ════════════════════════════════════════════ */
(function initScrollDetection() {
  const scroller   = document.getElementById('scroller');
  const scrollHint = document.getElementById('scrollHint');
  let lastPanel = -1;

  scroller.addEventListener('scroll', () => {
    const H = scroller.clientHeight || window.innerHeight;
    const scrollTop = scroller.scrollTop;
    const panel = Math.round(scrollTop / H);

    if (panel !== lastPanel) {
      lastPanel = panel;

      // Toggle panel animations based on current active panel
      if (panel === 1) {
        ackAnim.show();
      } else {
        ackAnim.hide();
      }

      if (panel === 2) {
        journeyAnim.show();
      } else {
        journeyAnim.hide();
      }

      if (panel === 4) {
        conclusionAnim.show();
      } else {
        conclusionAnim.hide();
      }

      if (panel === 0) {
        scrollHint.style.opacity = '1';
      } else {
        scrollHint.style.opacity = '0';
      }
    }

    // Scroll-linked morph transition between Panel 2 (Journey) and Panel 3 (TOC)
    if (scrollTop >= 2 * H) {
      const ratio = (scrollTop - 2 * H) / H;
      morphProgress = Math.min(Math.max(ratio, 0), 1);
      isMorphing = true;

      if (morphProgress > 0.58) {
        tocWrap.classList.add('visible');
      } else {
        tocWrap.classList.remove('visible');
      }
    } else {
      morphProgress = 0;
      isMorphing = false;
      tocWrap.classList.remove('visible');
    }
  }, { passive: true });
})();


/* ════════════════════════════════════════════
   REFLECTION MODAL CONTROLLER
   ════════════════════════════════════════════ */
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = modalOverlay.querySelector('.modal-content');
const modalClose   = document.getElementById('modalClose');

function openReflectionModal(idx) {
  const s = SESSIONS[idx];
  if (!s || !s.reflection) return;

  const r = s.reflection;

  // Format Application of Learning bullet list items
  const actionList = r.action.split('\n')
    .map(item => item.replace(/^[\u2022\u2022\s*-]+/g, '').trim())
    .filter(cleaned => cleaned.length > 0)
    .map(cleaned => `<li class="modal-list-item">${cleaned}</li>`)
    .join('');

  // Format gallery evidence boxes dynamically
  const galleryHtml = r.galleryItems.map(item => {
    const isImg = /\.(webp|png|jpg|jpeg|gif)$/i.test(item) || item.startsWith('Assets/');
    if (isImg) {
      return `
        <div class="modal-gallery-item image-item">
          <img src="${item}" alt="Gallery Image" class="modal-gallery-img">
        </div>
      `;
    } else {
      return `
        <div class="modal-gallery-item">
          <i class="ti ti-camera"></i>
          <span>${item}</span>
        </div>
      `;
    }
  }).join('');

  // Determine category display name
  const catNames = {
    emp: 'Employability & Workplace Skills',
    com: 'Communication & Self-Awareness',
    ldr: 'Leadership & Project Collaboration'
  };
  const catName = catNames[s.cat] || 'Professional Skills';

  modalContent.innerHTML = `
    <div class="modal-kicker">${catName} &middot; Session ${s.n}</div>
    <h3 class="modal-title">${s.title}</h3>
    
    <div class="modal-meta-row">
      <div class="modal-meta-item"><i class="ti ti-user"></i> <span>Resource Person: ${r.resource}</span></div>
      <div class="modal-meta-item"><i class="ti ti-calendar"></i> <span>Date: ${r.date}</span></div>
    </div>

    <div class="modal-divider"></div>

    <!-- Tab Buttons -->
    <div class="modal-tabs">
      <button class="modal-tab-btn active" data-tab="learnings"><i class="ti ti-book-2"></i> Learnings</button>
      <button class="modal-tab-btn" data-tab="reflection"><i class="ti ti-brain"></i> Reflection</button>
      <button class="modal-tab-btn" data-tab="actions"><i class="ti ti-rocket"></i> Actions</button>
      <button class="modal-tab-btn" data-tab="gallery"><i class="ti ti-photo"></i> Gallery</button>
    </div>

    <!-- Tab 1: Learnings Panel -->
    <div class="modal-tab-panel active" id="panel-learnings">
      <div class="modal-quote-wrap">
        <p class="modal-quote">"${r.quote.text}"</p>
        <span class="modal-quote-author">— ${r.quote.author}</span>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Session Overview</div>
        <p class="modal-text" style="margin-bottom: 2rem;">${r.overview}</p>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Key Learnings & Visual Diagrams</div>
        <div id="key-learnings-widget">
          <!-- Interactive widgets populated dynamically by Javascript -->
        </div>
      </div>
    </div>

    <!-- Tab 2: Reflection Panel -->
    <div class="modal-tab-panel" id="panel-reflection">
      <div class="modal-section">
        <div class="modal-section-title">Interactive Activity</div>
        <p class="modal-text">${r.interactiveActivity}</p>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Personal Reflection</div>
        <p class="modal-text" style="font-style: italic; line-height: 1.8; opacity: 0.9;">${r.body}</p>
      </div>
    </div>

    <!-- Tab 3: Actions Panel -->
    <div class="modal-tab-panel" id="panel-actions">
      <div class="modal-section">
        <div class="modal-section-title">Application of Learning</div>
        <ul class="modal-list">
          ${actionList}
        </ul>
      </div>
      <div class="takeaway-card">
        <div class="takeaway-header">
          <i class="ti ti-bulb"></i>
          <span>Key Takeaway</span>
        </div>
        <p class="takeaway-text">${r.keyTakeaway}</p>
      </div>
    </div>

    <!-- Tab 4: Gallery Panel -->
    <div class="modal-tab-panel" id="panel-gallery">
      <div class="modal-section">
        <div class="modal-section-title">Session Gallery</div>
        <div class="modal-gallery-grid">
          ${galleryHtml}
        </div>
        <p class="modal-text" style="font-size: 11px; color: var(--text-faint); margin-top: 16px; text-align: center;">
          ${r.galleryFigure}
        </p>
      </div>
    </div>
  `;

  // Attach tab switching events
  const tabBtns = modalContent.querySelectorAll('.modal-tab-btn');
  const tabPanels = modalContent.querySelectorAll('.modal-tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetTab = btn.dataset.tab;
      const targetPanel = modalContent.querySelector(`#panel-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // Render the appropriate Interactive Learning Widget
  const keyLearningsContainer = modalContent.querySelector('#key-learnings-widget');
  const parsedTopics = parseKeyLearnings(r.keyLearningsHtml);

  if (s.n === "03") {
    // Session 3: Johari Window Model + Skills mindmap
    const mainTopics = parsedTopics.filter(t => !t.title.toLowerCase().includes('johari'));
    
    keyLearningsContainer.innerHTML = `
      <div class="modal-section-title" style="margin-top: 1rem; margin-bottom: 1rem;">Core Skills & Values Map</div>
      <div id="self-awareness-mindmap" style="margin-bottom: 3rem;"></div>
      <div class="modal-section-title" style="margin-top: 2rem; margin-bottom: 1rem;">Johari Window Model (Click Quadrants to Explore)</div>
      <div id="johari-window-widget" style="margin-bottom: 1.5rem;"></div>
    `;
    
    renderConceptTree(mainTopics, keyLearningsContainer.querySelector('#self-awareness-mindmap'), s.cat);
    renderJohariWindow(keyLearningsContainer.querySelector('#johari-window-widget'));
  } 
  else if (s.n === "08") {
    // Session 8: Negotiation BATNA/ZOPA + Steps timeline
    const negotiationSteps = [
      { title: 'Prep', desc: 'Preparation: Define your goals, identify your BATNA threshold, and gather relevant background research about the other party.' },
      { title: 'Open', desc: 'Opening: Present initial positions, outline high-level proposals, and establish a constructive and professional relationship.' },
      { title: 'Explore', desc: 'Exploration: Ask open-ended questions, share critical constraints, and identify each party\'s true underlying interests.' },
      { title: 'Bargain', desc: 'Bargaining: Propose trades, offer mutual concessions, and work on closing value gaps through creative problem-solving.' },
      { title: 'Close', desc: 'Closing: Finalize agreement details, summarize concessions, write down agreed terms, and secure final approvals.' },
      { title: 'Reflect', desc: 'Reflection: Review negotiation results, analyze what BATNA option worked best, and build trust for future engagements.' }
    ];

    const mainTopics = parsedTopics.filter(t => 
      !t.title.toLowerCase().includes('process') && 
      !t.title.toLowerCase().includes('concept')
    );

    keyLearningsContainer.innerHTML = `
      <div class="modal-section-title" style="margin-bottom: 1rem;">ZOPA (Zone of Possible Agreement) Model</div>
      <div id="zopa-diagram-widget" style="margin-bottom: 3rem;"></div>
      
      <div class="modal-section-title" style="margin-bottom: 1rem;">Negotiation Process (Click Steps to Explore)</div>
      <div id="negotiation-flow-widget" style="margin-bottom: 3rem;"></div>

      <div class="modal-section-title" style="margin-top: 2rem; margin-bottom: 1rem;">Negotiation Principles & Mistakes Map</div>
      <div id="negotiation-mindmap"></div>
    `;

    renderZopaDiagram(keyLearningsContainer.querySelector('#zopa-diagram-widget'));
    renderStepFlow(negotiationSteps, keyLearningsContainer.querySelector('#negotiation-flow-widget'), s.cat);
    renderConceptTree(mainTopics, keyLearningsContainer.querySelector('#negotiation-mindmap'), s.cat);
  }
  else if (s.n === "09") {
    // Session 9: Tuckman's Stages step progress + Teamwork mindmap
    const tuckmanStages = [
      { title: 'Forming', desc: 'Forming: Team members are introduced, anxiety is high, and roles or rules are still unclear. Leadership is directive.' },
      { title: 'Storming', desc: 'Storming: Conflicts and friction arise due to differing ideas, work ethics, or leadership clashes. Members test boundaries.' },
      { title: 'Norming', desc: 'Norming: Members begin to cooperate, resolve differences, build trust, establish team rules, and value diversity.' },
      { title: 'Performing', desc: 'Performing: The team operates at high efficiency, collaborating smoothly toward shared objectives with minimal supervision.' },
      { title: 'Adjourning', desc: 'Adjourning: The team completes the project, documents key learnings, celebrates success, and disbands.' }
    ];

    const mainTopics = parsedTopics.filter(t => !t.title.toLowerCase().includes('stages'));

    keyLearningsContainer.innerHTML = `
      <div class="modal-section-title" style="margin-bottom: 1rem;">Tuckman's Stages of Team Development (Click Steps to Explore)</div>
      <div id="tuckman-flow-widget" style="margin-bottom: 3rem;"></div>
      
      <div class="modal-section-title" style="margin-top: 2rem; margin-bottom: 1rem;">Teamwork & Leadership Principles Map</div>
      <div id="team-mindmap"></div>
    `;

    renderStepFlow(tuckmanStages, keyLearningsContainer.querySelector('#tuckman-flow-widget'), s.cat);
    renderConceptTree(mainTopics, keyLearningsContainer.querySelector('#team-mindmap'), s.cat);
  } 
  else {
    // Default mindmap for other sessions (1, 2, 4, 5, 6, 7)
    renderConceptTree(parsedTopics, keyLearningsContainer, s.cat);
  }

  // Lightbox functionality for gallery images
  const galleryImages = modalContent.querySelectorAll('.modal-gallery-img');
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox-overlay';
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <img src="${img.src}" alt="Expanded Gallery Image">
          <button class="lightbox-close">&times;</button>
        </div>
      `;
      document.body.appendChild(lightbox);
      
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
          lightbox.remove();
        }
      });
    });
  });

  modalOverlay.classList.add('visible');
}

modalClose.addEventListener('click', () => {
  modalOverlay.classList.remove('visible');
});

modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('visible');
  }
});


/* ════════════════════════════════════════════
   WIDGET RENDERING ENGINE FOR KEY LEARNINGS
   ════════════════════════════════════════════ */

function parseKeyLearnings(htmlStr) {
  const temp = document.createElement('div');
  temp.innerHTML = htmlStr;
  
  const topics = [];
  let currentTopic = null;

  Array.from(temp.children).forEach(el => {
    if (el.classList.contains('modal-sublist-title')) {
      const text = el.textContent.trim();
      currentTopic = {
        title: text,
        points: []
      };
      topics.push(currentTopic);
    } else if (el.classList.contains('modal-text') || el.tagName === 'P') {
      const text = el.textContent.trim();
      if (currentTopic) {
        currentTopic.points.push(text);
      } else {
        currentTopic = {
          title: "Introduction",
          points: [text]
        };
        topics.push(currentTopic);
      }
    }
  });

  return topics.filter(t => t.title.length > 0 && (t.points.length > 0 || t.title.endsWith('?')));
}

function renderConceptTree(topics, container, cat) {
  if (!topics || topics.length === 0) return;
  
  let satelliteHtml = '';
  let svgLines = '';
  const N = topics.length;
  
  topics.forEach((t, i) => {
    satelliteHtml += `
      <button class="tree-satellite-card ${i === 0 ? 'active' : ''}" data-node-idx="${i}">
        <i class="ti ti-chevron-right"></i>
        <span>${t.title.replace(/\?$/, '')}</span>
      </button>
    `;
    svgLines += `<line id="tree-line-${i}" class="${i === 0 ? 'active' : ''}"></line>`;
  });
  
  const catClass = cat ? `cat-${cat}` : '';
  container.innerHTML = `
    <div class="concept-tree-container ${catClass}">
      <div class="tree-visual">
        <svg class="tree-svg">
          ${svgLines}
        </svg>
        <div class="tree-hub-col">
          <div class="tree-hub-card">Core Topic</div>
        </div>
        <div class="tree-svg-col"></div>
        <div class="tree-satellite-col">
          ${satelliteHtml}
        </div>
      </div>
      <div class="tree-details-card" id="tree-details-box"></div>
    </div>
  `;
  
  const detailBox = container.querySelector('#tree-details-box');
  const satellites = container.querySelectorAll('.tree-satellite-card');
  const lines = container.querySelectorAll('.tree-svg line');
  
  function updateLines() {
    const hub = container.querySelector('.tree-hub-card');
    const visual = container.querySelector('.tree-visual');
    if (!hub || !visual) return;
    
    const visualRect = visual.getBoundingClientRect();
    const hubRect = hub.getBoundingClientRect();
    
    const x1 = (hubRect.left + hubRect.width) - visualRect.left;
    const y1 = (hubRect.top + hubRect.height / 2) - visualRect.top;
    
    satellites.forEach((sat, idx) => {
      const line = container.querySelector(`#tree-line-${idx}`);
      if (!line) return;
      
      if (window.innerWidth <= 768) {
        line.setAttribute('x1', '0');
        line.setAttribute('y1', '0');
        line.setAttribute('x2', '0');
        line.setAttribute('y2', '0');
        return;
      }
      
      const satRect = sat.getBoundingClientRect();
      const x2 = satRect.left - visualRect.left;
      const y2 = (satRect.top + satRect.height / 2) - visualRect.top;
      
      line.setAttribute('x1', x1);
      line.setAttribute('y1', y1);
      line.setAttribute('x2', x2);
      line.setAttribute('y2', y2);
    });
  }
  
  function showDetails(idx) {
    const topic = topics[idx];
    if (!topic) return;
    
    const itemsHtml = topic.points.map(pt => `<li class="tree-detail-item">${pt}</li>`).join('');
    detailBox.innerHTML = `
      <div class="tree-detail-header">${topic.title}</div>
      <ul class="tree-detail-list">
        ${itemsHtml}
      </ul>
    `;
  }
  
  showDetails(0);
  
  // Wait for layout rendering to complete before calculating line bounding boxes
  setTimeout(updateLines, 50);
  
  satellites.forEach((sat, idx) => {
    sat.addEventListener('click', () => {
      satellites.forEach(s => s.classList.remove('active'));
      lines.forEach(l => l.classList.remove('active'));
      
      sat.classList.add('active');
      const line = container.querySelector(`#tree-line-${idx}`);
      if (line) line.classList.add('active');
      
      showDetails(idx);
    });
  });
  
  window.addEventListener('resize', updateLines);
  
  // Garbage collection: remove resize listener when modal/container is closed/removed from DOM
  const observer = new MutationObserver((mutations, obs) => {
    if (!document.body.contains(container)) {
      window.removeEventListener('resize', updateLines);
      obs.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

function renderJohariWindow(container) {
  const quadrants = [
    {
      key: 'open-area',
      title: 'Open Area',
      subtitle: 'Arena',
      desc: 'Information known to both yourself and others. This includes your behaviors, skills, feelings, and beliefs that are openly shared. The goal of personal growth is to expand this area through trust, self-disclosure, and active feedback seeking.'
    },
    {
      key: 'blind-area',
      title: 'Blind Area',
      subtitle: 'Blind Spot',
      desc: 'Characteristics, habits, or strengths that others recognize in you, but you remain unaware of. You can reduce your blind spot and discover hidden blind spots by actively soliciting honest, constructive feedback from peers, mentors, and coworkers.'
    },
    {
      key: 'hidden-area',
      title: 'Hidden Area',
      subtitle: 'Façade',
      desc: 'Information, experiences, feelings, and secrets known to yourself but intentionally kept hidden from others. Building professional trust, psychological safety, and practicing appropriate self-disclosure helps shift details into the Open Area.'
    },
    {
      key: 'unknown-area',
      title: 'Unknown Area',
      subtitle: 'Unknown',
      desc: 'Qualities, latent talents, feelings, and potentials that are undiscovered by both yourself and others. Engaging in novel experiences, taking on leadership challenges, and reflective practices help reveal these hidden competencies.'
    }
  ];

  let gridHtml = '';
  quadrants.forEach((q, i) => {
    gridHtml += `
      <button class="johari-quadrant ${q.key} ${i === 0 ? 'active' : ''}" data-q-idx="${i}">
        <div class="johari-quadrant-title">${q.title}</div>
        <div class="johari-quadrant-subtitle">${q.subtitle}</div>
      </button>
    `;
  });

  container.innerHTML = `
    <div class="johari-container">
      <div class="johari-grid">
        ${gridHtml}
      </div>
      <div class="johari-details-box" id="johari-details"></div>
    </div>
  `;

  const detailsBox = container.querySelector('#johari-details');
  const buttons = container.querySelectorAll('.johari-quadrant');

  function showQuadrantDetails(idx) {
    const q = quadrants[idx];
    detailsBox.className = 'johari-details-box ' + q.key;
    detailsBox.innerHTML = `
      <div class="johari-details-title">
        <span class="johari-quadrant-title" style="font-size: 15px; margin-bottom: 0;">${q.title}</span>
        <span style="font-size: 11px; text-transform: uppercase; color: var(--text-muted); font-weight: 500;">(${q.subtitle})</span>
      </div>
      <p class="johari-details-text">${q.desc}</p>
    `;
  }

  showQuadrantDetails(0);

  buttons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showQuadrantDetails(idx);
    });
  });
}

function renderStepFlow(steps, container, cat) {
  if (!steps || steps.length === 0) return;

  let stepsHtml = '';
  steps.forEach((step, i) => {
    stepsHtml += `
      <button class="timeline-flow-step ${i === 0 ? 'active' : ''}" data-step-idx="${i}">
        <div class="timeline-step-dot"></div>
        <div class="timeline-step-label">${step.title}</div>
      </button>
    `;
  });

  const catClass = cat ? `cat-${cat}` : '';
  container.innerHTML = `
    <div class="timeline-flow-container ${catClass}">
      <div class="timeline-flow-track">
        <div class="timeline-flow-line">
          <div class="timeline-flow-line-progress" id="timeline-progress"></div>
        </div>
        ${stepsHtml}
      </div>
      <div class="timeline-step-content-card" id="timeline-step-content"></div>
    </div>
  `;

  const progressFill = container.querySelector('#timeline-progress');
  const contentBox = container.querySelector('#timeline-step-content');
  const stepElements = container.querySelectorAll('.timeline-flow-step');

  function selectStep(idx) {
    stepElements.forEach(el => el.classList.remove('active'));
    stepElements[idx].classList.add('active');

    const percent = (idx / (steps.length - 1)) * 100;
    progressFill.style.width = `${percent}%`;

    const step = steps[idx];
    contentBox.innerHTML = `
      <div class="timeline-step-content-title">
        <i class="ti ti-arrow-right"></i>
        <span>${step.title}</span>
      </div>
      <p class="timeline-step-content-text">${step.desc}</p>
    `;
  }

  selectStep(0);

  stepElements.forEach((el, idx) => {
    el.addEventListener('click', () => {
      selectStep(idx);
    });
  });
}

function renderZopaDiagram(container) {
  container.innerHTML = `
    <div class="zopa-diagram-container">
      <p class="modal-text" style="font-size: 13px; margin-bottom: 1rem; text-align: center;">
        The overlap range between Buyer's ceiling and Seller's floor represents the <strong>Zone of Possible Agreement (ZOPA)</strong>.
      </p>
      
      <div class="zopa-ranges">
        <div class="zopa-range-bar-wrapper">
          <div class="zopa-bar-label">Buyer Range</div>
          <div class="zopa-range-bar-track">
            <div class="zopa-range-bar-fill buyer"></div>
          </div>
        </div>
        
        <div class="zopa-range-bar-wrapper">
          <div class="zopa-bar-label">Seller Range</div>
          <div class="zopa-range-bar-track">
            <div class="zopa-range-bar-fill seller"></div>
          </div>
        </div>
        
        <div class="zopa-range-bar-wrapper" style="margin-top: 4px;">
          <div class="zopa-bar-label" style="color: #1D9E75; font-weight: 600;">ZOPA (Overlap)</div>
          <div class="zopa-range-bar-track">
            <div class="zopa-range-bar-fill overlap"></div>
          </div>
        </div>
        
        <div class="zopa-axis"></div>
      </div>
      
      <div class="zopa-legend">
        <div class="zopa-legend-item">
          <div class="zopa-legend-color buyer"></div>
          <span>Buyer threshold (up to 70%)</span>
        </div>
        <div class="zopa-legend-item">
          <div class="zopa-legend-color seller"></div>
          <span>Seller threshold (down to 45%)</span>
        </div>
        <div class="zopa-legend-item">
          <div class="zopa-legend-color overlap"></div>
          <span>Agreement Zone (45% - 70%)</span>
        </div>
      </div>
    </div>
  `;
}

requestAnimationFrame(renderFrame);

/* ════════════════════════════════════════════
   CIRCULAR CONCENTRIC NAVIGATION MENU
   ════════════════════════════════════════════ */
(function initCircularMenu() {
  const overlay = document.getElementById('circularMenuOverlay');
  const openBtn = document.getElementById('navMenuBtn');
  const closeBtn = document.getElementById('menuCloseBtn');
  const rings = document.querySelectorAll('.menu-ring');
  const scroller = document.getElementById('scroller');

  if (!overlay || !openBtn || !closeBtn) return;

  function openMenu() {
    overlay.classList.add('active');
  }

  function closeMenu() {
    overlay.classList.remove('active');
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeMenu();
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeMenu();
    }
  });

  rings.forEach(ring => {
    ring.addEventListener('click', (e) => {
      e.stopPropagation();
      const panelIndex = parseInt(ring.dataset.panel, 10);
      if (isNaN(panelIndex)) return;

      closeMenu();

      const H = scroller.clientHeight || window.innerHeight;
      scroller.scrollTo({
        top: panelIndex * H,
        behavior: 'smooth'
      });
    });
  });
})();



/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   LEARNING JOURNEY TIMELINE â€” Accordion toggle
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
(function initLJTimeline() {
  const nodes = document.querySelectorAll('.lj-node');

  nodes.forEach(function(node) {
    const btn = node.querySelector('.lj-node-btn');
    if (!btn) return;

    btn.addEventListener('click', function() {
      const isActive = node.classList.contains('active');

      // Close all other open nodes
      nodes.forEach(function(n) {
        n.classList.remove('active');
        var b = n.querySelector('.lj-node-btn');
        if (b) b.setAttribute('aria-expanded', 'false');
        var o = n.querySelector('.lj-outcomes');
        if (o) o.setAttribute('aria-hidden', 'true');
      });

      // Toggle clicked node
      if (!isActive) {
        node.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        var outcomes = node.querySelector('.lj-outcomes');
        if (outcomes) outcomes.setAttribute('aria-hidden', 'false');
      }
    });
  });
})();
