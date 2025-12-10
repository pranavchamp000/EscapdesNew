import { Course, CurriculumModule, Workshop, Testimonial, ChefInstructor } from './types';
import diplomaImage from 'figma:asset/11b69f9deaa65fb74982e8c048fec69505c399c6.png';
import weekendImage from 'figma:asset/a1d4528594d3e734d62a2482f910abbbb08eedc4.png';
import fondantImage from 'figma:asset/371ee94941c2e822704c61e37b429ff98c0c6638.png';
import cupcakeImage from 'figma:asset/f8b06d636e49765e5001f1e09d82cf68a7c3d4af.png';
import macaronImage from 'figma:asset/bee7586f86a15c4b4da5ca45da24f539420019f3.png';
import pastryImage from 'figma:asset/e4d397921ef0a750c6de1dffe243274922d998b7.png';
import intlBreadsImage from 'figma:asset/3635405c9c638f2f34f7410b0649864bbbe83187.png';
import basicBreadImage from 'figma:asset/e2e13054f33bf1ab3bc4d98da259b3c270740905.png';
import dessertsImage from 'figma:asset/e2e007661207d20ca57a8ff6e27e96d4fcc3e04c.png';
import teaCakesImage from 'figma:asset/6293c91bb8a3dfae9d566386183307960772017b.png';
import cookiesImage from 'figma:asset/087d62f0dcfd25f6e8e33968dc7ba0d07d5639c5.png';
import celebrationCakesImage from 'figma:asset/6d674baca84460da126d0bb2058c9e530225b330.png';
import teamBgImage from 'figma:asset/f0bed144808f68727f89c7dd4ce50487270de54c.png';
import chefSiriImage from 'figma:asset/e2b9471d80a34acc0072fd8649e3f8bca3082bc6.png';
import chefBlessyImage from 'figma:asset/269d97571f75a84be8540f6e3444fd3227a785d8.png';
import chefVardhiniImage from 'figma:asset/4ebdfb9bb7254ed0c216169fe0ca1166d5bf7726.png';
import chefLikithaImage from 'figma:asset/8271167a5af6a6175dfa375d0d10e87f64987019.png';
import freshImage1 from 'figma:asset/77bd9f3540414d4b3324d09db8e70da03ca9544a.png';
import freshImage2 from 'figma:asset/495ba1e70bd203cb2e66e38bfd7b9129d9276dc9.png';
import freshImage3 from 'figma:asset/2d685fe108873a4be680ac178fe27cf2462a1fa2.png';
import freshImage4 from 'figma:asset/983f78c79da5779782e8077f8d89e45f02169ae9.png';
import freshImage5 from 'figma:asset/3b042be2dc480568d26fb8e8d7e5545af506d49d.png';
import freshImage6 from 'figma:asset/41a393258a8d3cd718f51aa8e52702988a1cc3d7.png';
import freshImage7 from 'figma:asset/77b1fdaa12d5ec45664c38c18542ecb1a6dbd435.png';
import freshImage8 from 'figma:asset/1f5036eb2fe65396f40e1bcb416942b250a44a7a.png';
import freshImage9 from 'figma:asset/be64f13ec536005804efdad34d3ef66169d4830c.png';
import freshImage10 from 'figma:asset/b8e72012427c2d64a02b53821eb4c420b760f887.png';
import freshImage11 from 'figma:asset/c1ca4e8dbc323bf4cd3f915d73d3a78544cb8215.png';
import freshImage12 from 'figma:asset/165206349849fd8145b501988396cc16283d593c.png';
import freshImage13 from 'figma:asset/14d589d11aa5b7dd6ccc112af25ba9706eade050.png';
import freshImage14 from 'figma:asset/11fb64951ce391ff7bbfe3a0ff9f77b7d82928b5.png';
import freshImage15 from 'figma:asset/fc5af46aa2a6588eac2a350a66063a7300476b71.png';
import freshImage16 from 'figma:asset/fa79294ad0130a1df849db372f3d2c8ee25ab438.png';
import freshImage17 from 'figma:asset/27649e3b6f1b87262202f7c970cd38df2ac812cb.png';
import freshImage18 from 'figma:asset/a99c37388dda42f1c22d509f79b4f6ad0aad344b.png';
import academyClassroomImage from 'figma:asset/d9955791cd8731861e8c2f0180f5703e70c8b002.png';

export const COURSES: Course[] = [
  {
    id: 'diploma',
    title: 'Certification Baking Program',
    subtitle: 'Monday - Thursday | 9 AM - 5.30 PM',
    description: 'A comprehensive 8-week program designed to build deep competence in baking and patisserie. From foundational methods to advanced techniques, every module blends precision, practice, and professional finishing. Perfect for passionate bakers looking to elevate their craft, expand their home-baking repertoire, or prepare for entrepreneurial journeys in bakeries, cafés, and commercial kitchen ventures.',
    price: '₹ 1,77,000/-',
    duration: '8 Weeks',
    schedule: 'Full Time',
    features: [
      'Internationally certified by City & Guilds',
      '100% hands-on classes; master over 150+ recipes.',
      'Production-ready recipes',
      'Global baking techniques and practises',
      'Industry-grade Infrastructure'
    ],
    image: diplomaImage,
    isPopular: true,
    nextBatch: '6th January 2026'
  },
  {
    id: 'weekend',
    title: 'Professional Weekend Program',
    subtitle: 'Saturday & Sunday | 10.30 AM - 5.00 PM',
    description: "A focused 6-weekend program crafted for passionate bakers and working professionals who want professional-level training in a flexible format. Through 10 hands-on modules, you'll master essential and advanced skills in cakes, breads, pastries, frostings, desserts, and decorative techniques. Ideal for passionate bakers looking to deepen their craft or pursue future baking paths.",
    price: '₹ 68,000/-',
    duration: '6 Weekends',
    schedule: 'Weekend',
    features: [
      '6 weekends, 10 modules, 50+ gourmet recipes',
      '100% hands-on, professional academy learning',
      'Industry-grade infrastructure & mentorship',
      'Perfect for working professionals & baking enthusiasts',
      'Real techniques. Real feedback. Real results.'
    ],
    image: weekendImage,
    nextBatch: '18th January 2026'
  }
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'cupcakes',
    title: 'Cupcakes and Frosting',
    description: 'Whisk, Bake & Frost. Master six signature cupcake styles and stabilization techniques.',
    date: '13th Dec 2025',
    price: '₹ 5,500/-',
    time: '10:30 AM - 5 PM',
    image: cupcakeImage,
    status: 'upcoming',
    nextDate: 'To be announced'
  },
  {
    id: 'desserts',
    title: 'Desserts & Cheesecakes',
    description: 'New York cheesecake, Tiramisu, Tres Leches & more. Elegant cafe-style desserts.',
    date: '14th Dec 2025',
    price: '₹ 5,500/-',
    time: '10:30 AM - 5 PM',
    image: dessertsImage,
    status: 'upcoming',
    nextDate: 'To be announced'
  },
  {
    id: 'basic-bread',
    title: 'Basic Bread Masterclass',
    description: 'From flour to crust - bake breads that nourish. Dinner rolls, Burger Buns, Pizza & Loaves.',
    date: '20th Dec 2025',
    price: '₹ 6,000/-',
    time: '10:30 AM - 5 PM',
    image: basicBreadImage,
    status: 'upcoming',
    nextDate: 'To be announced'
  },
  {
    id: 'intl-breads',
    title: 'International Breads',
    description: 'Loaves from every land. Sweet & Savoury Babka, Challah, Korean Bun, and Doughnuts.',
    date: '21st Dec 2025',
    price: '₹ 6,000/-',
    time: '10:30 AM - 5 PM',
    image: intlBreadsImage,
    status: 'upcoming',
    nextDate: 'To be announced'
  },
  {
    id: 'pastry',
    title: 'Gourmet Pastry Workshop',
    description: 'Master the fine art of pastry making. From Black Forest to Biscoff, dive into layered pastry cakes.',
    date: '27th Dec 2025',
    price: '₹ 6,000/-',
    time: '10:30 AM - 5 PM',
    image: pastryImage,
    status: 'upcoming',
    nextDate: 'To be announced'
  },
  {
    id: 'macaron',
    title: 'Master the Macaron',
    description: 'Get the technique, texture, and flavour just right. Learn fillings, decor, and shelf life.',
    date: '28th Dec 2025',
    price: '₹ 7,000/-',
    time: '10:30 AM - 5 PM',
    image: macaronImage,
    status: 'upcoming',
    nextDate: 'To be announced'
  },
  {
    id: 'celebration-cakes',
    title: 'Celebration Cakes',
    description: 'Layer, pipe, glaze - learn the art of the final flourish. Master tall cake building, bento styles, and Lambeth piping with clean finishes. Covers glazes, pricing, packaging, and everything you need to go pro.',
    date: '3/4 Jan',
    price: '₹ 10,000/-',
    time: '10:30 AM - 5 PM',
    image: celebrationCakesImage,
    status: 'upcoming',
    nextDate: 'To be announced'
  },
  {
    id: 'fondant',
    title: 'Fondant Masterclass',
    description: 'Design, Drape, and Decorate. A specialized workshop focused on fondant cake decoration.',
    date: '10/11 Jan',
    price: '₹ 13,000/-',
    time: '10:30 AM - 5 PM',
    image: fondantImage,
    status: 'upcoming',
    nextDate: 'To be announced'
  },
  {
    id: 'cookies',
    title: 'Gourmet Cookies',
    description: 'Chocolate chip to shortcrust across 6 signature styles. Includes sweet & savoury bakes.',
    date: '6th Dec 2025',
    price: '₹ 5,500/-',
    time: '10:30 AM - 5 PM',
    image: cookiesImage,
    status: 'completed',
    nextDate: 'To be announced'
  },
  {
    id: 'teacakes',
    title: 'Tea Cakes & Travel Cakes',
    description: 'Classic tea cakes & travel bakes. Recipes tested to perfection.',
    date: '7th Dec 2025',
    price: '₹ 5,500/-',
    time: '10:30 AM - 5:00 PM',
    image: teaCakesImage,
    status: 'completed',
    nextDate: 'To be announced'
  }
];

export const CURRICULUM: CurriculumModule[] = [
  { id: 1, title: 'The Art of Foundational Breads', content: 'A deep introduction to the fundamentals of bread-making - from understanding flour behaviour and yeast dynamics to working with pre-ferments and high-hydration doughs. Learners practice shaping, scoring, and baking a wide range of classic and cultural breads while gaining clarity on proofing, ovens, and the science behind great structure.' },
  { id: 2, title: 'Everyday Classics: Teacakes, Cookies & Muffins', content: 'Explore the techniques behind universally loved bakes - from tender tea cakes and crisp cookies to perfectly structured muffins and cupcakes. Students learn the chemistry of basic ingredients, how textures shift across methods, and how to finish products with finesse and flavour-forward detail.' },
  { id: 3, title: 'Custards, Cheesecakes & Soft-Set Desserts', content: 'Master the foundations of custards through crème caramel, brûlée, pot de crème, baked yogurt, and more - along with a variety of cheesecake styles. This module focuses on ingredient roles, cooking precision, and both traditional and contemporary finishing techniques.' },
  { id: 4, title: 'Enriched Doughs & Comfort Breads', content: 'Work with rich, flavour-packed doughs - from brioche and donuts to babka and berliners. Students learn mixing, shaping, proofing, baking/frying, and pairing these breads with classic accompaniments like pastry creams, fillings, jams, and custards.' },
  { id: 5, title: 'Meringues & Macaron Mastery', content: 'A complete introduction to the world of meringue-based desserts, covering both French and Italian techniques. Students learn to create consistent macaron shells, flavour pairings, fillings, and a range of meringue applications used across modern patisserie.' },
  { id: 6, title: 'Savoury Classics: Quiches & Tarts', content: 'Learn the craft of shortcrust pastry and how fat, flour, and technique come together to create flaky, buttery bases. Students practice lining tart rings, shaping quiches, and preparing an array of savoury fillings - including timeless favourites like quiche Lorraine.' },
  { id: 7, title: 'Laminated Pastries: Puff, Croissant & Danish', content: 'A highly technical module dedicated to lamination, butter handling, shaping, and proofing. Students produce puff pastry, croissants, danishes, pain au chocolat, almond croissants, and more, while understanding the science behind layers, structure, and perfect crumb.' },
  { id: 8, title: 'Choux Pastry & Filled Classics', content: 'Explore the versatility of choux through éclairs, profiteroles, and Paris-Brest. This module includes essential pastry creams and their variations, shaping techniques, baking precision, and modern approaches to flavour pairing and presentation.' },
  { id: 9, title: 'Hot and Cold Plated Desserts', content: 'Learn the art of professional dessert plating through deconstructed classics, elegant compositions, and multi-component presentations. Students explore textures, temperatures, sauces, garnishes, and visual balance to create high quality plated desserts that tell a story on the plate.' },
  { id: 10, title: 'Global Breads & Regional Signatures', content: 'Travel through iconic breads from around the world - from hand-rolled pizzas and soft bagels to crusty pretzels and flavourful focaccia. This module emphasizes regional techniques, cultural significance, and the unique characteristics that define each bread style.' },
  { id: 11, title: 'Sponges, Icings & Professional Cake Finishing', content: 'Master the foundations of cake-making from various sponge types (genoise, chiffon, vanilla, chocolate) to professional finishing techniques. Students learn crumb coating, buttercream application, ganache work, smoothing, piping, and creating bakery-standard layer cakes with precision and consistency.' },
  { id: 12, title: 'Couture Cakes & Fondant Design', content: 'An advanced module in cake artistry covering fondant work, sculpting, draping, structuring tiered cakes, and decorative techniques. Students create celebration cakes with a focus on design thinking, colour theory, edible embellishments, and delivering Instagram-worthy, structurally sound creations.' },
  { id: 13, title: 'Modern Sweet Tarts', content: 'Dive into contemporary tart-making with a focus on pâte sucrée, pâte sablée, and creative fillings. From classic lemon tarts to chocolate ganache tarts and fruit-topped showpieces, students learn blind baking, tempering chocolate, glazing, and achieving crisp, buttery shells paired with balanced, flavourful fillings.' },
  { id: 14, title: 'Petit Gâteaux & Contemporary Mini-Desserts', content: 'Create individual-sized desserts and modern plated components including mousse cakes, entremets, mirror glazes, inserts, and layered textures. This module emphasizes precision, assembly, presentation, and the techniques used in high-end patisseries and dessert-focused establishments.' },
  { id: 15, title: 'Chocolate Garnishes & Finishing Elements', content: 'An essential module focused on tempering chocolate, creating garnishes, shards, curls, and decorative elements. Students learn to work with high quality chocolate, along with techniques for adding professional finishing touches that elevate the visual impact of any dessert or bake.' },
  { id: 16, title: 'Bakery Operations & Business Essentials', content: 'Dive into the practical side of running a bakery - from cost management and menu planning to setting the right price for every recipe. Students also learn how to communicate their craft effectively through simple, effective social media practices.' },
];

export const WEEKEND_CURRICULUM: CurriculumModule[] = [
  { id: 1, title: 'Gourmet Cookies', content: 'Learn the techniques behind six signature cookie styles - from classic chocolate chip to delicate shortcrust. This module covers both sweet and savoury cookies, exploring textures, shaping methods, and how ingredient ratios affect the final product. Perfect for building a versatile baking repertoire.' },
  { id: 2, title: 'Tea Cakes & Travel Cakes', content: 'Master the art of classic tea cakes and travel-friendly bakes. This module focuses on tested recipes that deliver consistent results, exploring the balance between moisture, structure, and flavour. Learn how to create cakes that keep well and travel beautifully.' },
  { id: 3, title: 'Cupcakes & Frosting', content: 'Whisk, bake, and frost your way through six signature cupcake styles. This module covers foundational sponge techniques, stabilization methods for frostings, and finishing techniques that deliver bakery-standard results. Focus on flavour balance and professional presentation.' },
  { id: 4, title: 'Desserts & Cheesecakes', content: 'Create elegant cafe-style desserts including New York cheesecake, Tiramisu, and Tres Leches. Learn the techniques behind creamy, well-set cheesecakes and layered desserts that balance texture and flavour. This module emphasizes precision and presentation.' },
  { id: 5, title: 'Basic Bread Masterclass', content: 'From flour to crust, learn the foundations of bread-making. This module covers dinner rolls, burger buns, pizza dough, and loaves. Understand yeast behaviour, shaping techniques, and baking methods that produce breads with good structure and flavour.' },
  { id: 6, title: 'International Breads', content: 'Travel through iconic breads from around the world. This module includes sweet and savoury Babka, Challah, Korean cream buns, and doughnuts. Learn shaping, proofing, and finishing techniques specific to each bread style while understanding their cultural context.' },
  { id: 7, title: 'Gourmet Pastry Cakes', content: 'Master the art of layered pastry cakes, from Black Forest to Biscoff. This module covers sponge preparation, assembly techniques, and finishing methods for multi-component cakes. Learn how to create bakery-quality pastry cakes with clean layers and balanced flavours.' },
  { id: 8, title: 'Master the Macaron', content: 'Get the technique, texture, and flavour just right. This module covers both French and Italian macaron methods, focusing on achieving the perfect shell, feet, and texture. Learn fillings, flavour pairings, decoration techniques, and shelf-life management.' },
  { id: 9, title: 'Celebration Cakes', content: 'Layer, pipe, and glaze with confidence. This module covers tall cake construction, bento-style cakes, and Lambeth piping with clean finishes. Learn glazing techniques, pricing strategies, packaging methods, and everything needed to create celebration-worthy cakes professionally.' },
  { id: 10, title: 'Fondant Cake Decoration', content: 'Design, drape, and decorate with fondant. This specialized module focuses on fondant covering techniques, creating smooth finishes, and decorative applications. Learn to structure and finish cakes that are both beautiful and stable, with attention to detail and clean execution.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { 
    id: 1, 
    name: 'Likhitha Inavolu', 
    role: 'Home Baker', 
    quote: 'Found My Baking Potential',
    text: "I enrolled myself for 2 month course at escapades after postponing it for 6 months. From the day it began to the last day everyday was a new experience and new learning. Arundati ma'am and the chef instructors Chef Siri, Chef Blessy and Chef Dhara were very encouraging and patient with each one of us. Never knew I had the potential to bake what I can bake today. Will always be thankful for the team escapades for the support they've give me throughout the course. Escapades give you courage and strength to walk towards your dream.", 
    rating: 5 
  },
  { 
    id: 2, 
    name: 'Chethana Karnati', 
    role: 'Baking Enthusiast', 
    quote: 'Science Behind the Baking',
    text: "I had a wonderful experience at Escapades baking academy! All the chefs here are incredibly energetic, engaging, and truly make every student feel enthusiastic and confident in the kitchen. Their passion for baking is contagious. I especially loved how they went beyond just recipes and techniques, they explained the science behind baking, which really helped me understand why things work the way they do. Learning to make cookies and travel cakes was both fun and enriching. Highly recommend this academy to anyone who is a first-time baker or looking to level up their baking skills!", 
    rating: 5 
  },
  { 
    id: 3, 
    name: 'Karthik Reddy', 
    role: 'Baking Entrepreneur', 
    quote: 'A Rewarding Journey',
    text: "It was such an incredible experience learning from Arundhati Ma'am and her team. Anyone looking for a weekend course that's equally challenging and rewarding can opt to consider learning from Escapades Baking and Culinary Arts. The entire team takes you through standard practices, giving insights of what works practically and how to stay organised.", 
    rating: 5 
  },
  { 
    id: 4, 
    name: 'Lohitha R', 
    role: 'Home Baker', 
    quote: 'My Wisest Decision Ever',
    text: "I have been a part of the two month professional certificate course in baking and patisserie from Escapades. My journey as a beginner with little knowledge to someone who's confident enough to bake is only possible because of Arundati mam. Her patience, energy levels and knowledge is unmatchable. The academy is well equipped for any kind of baking technique. The classes are not only encouraging but also fun filled. The certification course has many modules which helps one gain experience on how to build a career in baking. One of my wisest decision and there's no going back. Thank you so much Escapades ❤️", 
    rating: 5 
  },
  { 
    id: 5, 
    name: 'Navya Kavya Rayasam', 
    role: 'Home Baker', 
    quote: 'Grace Meets Discipline',
    text: "Attending this baking school has been an incredible experience—by far the best place to master the art of baking. The standards are top-notch, akin to professional production levels, and the breadth of knowledge shared is immense. Having completed two modules, I am extremely satisfied with the training. What truly sets this place apart is Chef Arundhati. She strikes a perfect balance between grace and discipline, making a profound impact on her students. The team is super sweet and supportive too. I can't wait to return to this place once I clear my current commitment.", 
    rating: 5 
  },
  { 
    id: 6, 
    name: 'Shweta Nahar', 
    role: 'Baking Enthusiast', 
    quote: 'Perfect Learning Environment',
    text: "I have done a 6 weeks foundation course in baking & culinary. This is an amazing place. The team and Mam, they are fabulous. Arundhati Mam has created a perfect learning environment where every student is doing the stuff and participating into the class. The results are amazing. This is a long class which is worth staying for. If you just want to learn theory for 2 hours, see one item baking, then go home and chill, this place is not for you. I have seen improvement in my baking after attending this course. I would love to come again for additional classes ❤️", 
    rating: 5 
  }
];

export const FAQS = [
  // 8 Week Certification Program
  {
    question: "Do I need prior experience to join the 8 Week Certification Course?",
    answer: "Not at all. Our program is thoughtfully designed to be beginner-friendly, with a curriculum that starts from the absolute basics. Every class is 100% hands-on, and our instructional approach is structured to build your skills progressively, ensuring you gain confidence and competence at every step—whether you're touching flour for the first time or refining existing skills.",
    category: "8-week"
  },
  {
    question: "Tell me about the City & Guilds certification",
    answer: "Our 8 Week Certification Course awards you a City & Guilds Level 2 Certificate in Professional Baking and Patisserie; one of the most respected qualifications in the global culinary industry. City & Guilds, established in London in 1878, is recognized across over 100 countries and is considered the gold standard for vocational training. This certification validates your technical competence, opens doors to international culinary careers, and is highly valued by employers in hospitality, bakeries, hotels, and entrepreneurial ventures worldwide.",
    category: "8-week"
  },
  {
    question: "What does the cost of the 8 Week Certification Course include?",
    answer: "The course fee is all-inclusive. You receive premium ingredients for every class, access to industry-grade equipment and infrastructure, and get to take home everything you bake—proportionately distributed among the batch. Additionally, you're provided with 2 professional chef jackets, aprons, hair caps, a complete baking toolkit, and a fully bound curriculum book containing all 150+ recipes taught during the program. Everything you need to learn, practice, and succeed is included.",
    category: "8-week"
  },
  {
    question: "Can I pay in installments for the 8 Week Certification Course?",
    answer: "Yes, we offer a flexible payment structure. A 50% advance payment is required to register and secure your seat, and the balance amount can be paid within 2 weeks of starting your course.",
    category: "8-week"
  },
  
  // Professional Weekend Program
  {
    question: "Is the Professional Weekend Program a certified course?",
    answer: "Yes, upon successful completion, you will receive a certificate from Escapades Culinary Academy. This program equips you with business-ready skills, professional techniques, and the confidence to pursue baking commercially or elevate your personal craft to a professional standard.",
    category: "weekend"
  },
  {
    question: "Why aren't puff pastry and viennoiserie included in the Professional Weekend Program?",
    answer: "Puff pastry and viennoiserie require extended time and intensive practice due to their technical complexity. To ensure quality learning, we offer these as dedicated masterclasses every quarter. They are also comprehensively covered in our 8 Week Certification Course, which allows the time needed to master lamination and shaping techniques thoroughly.",
    category: "weekend"
  },
  {
    question: "What if I can't attend a class? Can I make it up in another batch?",
    answer: "Classes once missed cannot be automatically repeated or rescheduled. However, subject to seat availability in the next batch, the management may accommodate a make-up session. We recommend planning your schedule in advance to ensure full participation and continuity in learning.",
    category: "weekend"
  },
  
  // General Questions
  {
    question: "Are the courses eggless?",
    answer: "Unless specifically mentioned as eggless workshops, our courses are not exclusively eggless. We teach both eggless and egg-based recipes as part of a comprehensive, professional curriculum that prepares you for real-world baking across diverse client preferences and market demands.",
    category: "general"
  },
  {
    question: "The course fees seem higher than expected. Can you explain the value?",
    answer: "Escapades is among the most competitively priced academies in India when compared to leading institutions offering similar certifications and infrastructure. From our City & Guilds-certified curriculum and industry-grade facilities to expert instructors, hands-on learning, and premium ingredients—we match or exceed the best academies in the country. In terms of return on investment, course design, expertise, and real-world outcomes, Escapades delivers exceptional value in its category.",
    category: "general"
  }
];

export const BLOGS = [
  {
    id: 1,
    title: "Start Your Bakery Business",
    subtitle: "From Home Kitchen to Professional Academy",
    excerpt: "The complete guide to costing, licensing, and marketing your home bakery in India.",
    date: "Oct 15, 2025",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=600",
    content: [
      {
        heading: "Understanding the Market",
        text: "Before you even turn on your oven, you need to understand who you are baking for. The Indian bakery market is diverse, ranging from traditional sweets to modern French patisserie. Identifying your niche is the first step to success. Are you focusing on healthy, gluten-free bakes, or decadent celebration cakes?"
      },
      {
        heading: "Licensing and Regulations",
        text: "Operating a food business from home requires specific licenses, most importantly the FSSAI registration. Ensure your kitchen meets hygiene standards and you have the necessary paperwork in place to operate legally and build trust with your customers."
      },
      {
        heading: "Pricing Your Products",
        text: "One of the biggest challenges for home bakers is pricing. Do not just cover your ingredient costs; factor in your time, electricity, packaging, and marketing efforts. A sustainable business model relies on profitable pricing."
      },
      {
        heading: "Marketing on Social Media",
        text: "Instagram is a baker's best friend. High-quality photos, consistent posting, and engaging with your audience can turn followers into loyal customers. Share behind-the-scenes content to build a personal connection."
      }
    ]
  },
  {
    id: 2,
    title: "The Art of Eggless Baking",
    subtitle: "Achieving Fluffiness Without Eggs",
    excerpt: "How to achieve the perfect texture and rise without using eggs. Expert tips inside.",
    date: "Sep 22, 2025",
    image: "https://images.unsplash.com/photo-1488477181946-6428a029177b?auto=format&fit=crop&q=80&w=600",
    content: [
      {
        heading: "The Role of Eggs in Baking",
        text: "Eggs provide structure, moisture, and leavening. When removing them, we need to find suitable substitutes that perform these functions. Common substitutes include yogurt, condensed milk, and flax seeds, but knowing which one to use for which product is key."
      },
      {
        heading: "Using Yogurt and Baking Soda",
        text: "For sponges and cakes, a mixture of yogurt and baking soda creates a reaction that helps the batter rise, resulting in a soft and airy crumb. This is one of the most reliable methods for eggless vanilla and chocolate cakes."
      },
      {
        heading: "Condensed Milk for Richness",
        text: "If you want a dense, fudgy texture, condensed milk is your go-to. It adds sweetness and structure, making it perfect for brownies and rich tea cakes."
      },
      {
        heading: "Troubleshooting Common Issues",
        text: "Eggless cakes can sometimes be too dense or dry. Ensure you do not overmix the batter, and always measure your leavening agents precisely. Baking at the right temperature is also crucial for a good rise."
      }
    ]
  },
  {
    id: 3,
    title: "Sourdough Science 101",
    subtitle: "Mastering Wild Yeast",
    excerpt: "Understanding wild yeast, hydration, and the secret to that perfect open crumb.",
    date: "Aug 10, 2025",
    image: "https://images.unsplash.com/photo-1585478259715-876a6a81bc08?auto=format&fit=crop&q=80&w=600",
    content: [
      {
        heading: "What is a Starter?",
        text: "A sourdough starter is a symbiotic culture of bacteria and yeast. It is a living thing that needs to be fed regularly with flour and water. The strength of your starter directly affects the quality of your bread."
      },
      {
        heading: "Hydration Explained",
        text: "Hydration refers to the ratio of water to flour in your dough. Higher hydration doughs (75% and above) are stickier but yield a more open crumb and thinner crust. Beginners should start with lower hydration (65-70%) to master handling techniques."
      },
      {
        heading: "The Fermentation Process",
        text: "Bulk fermentation is where the magic happens. This is when the gluten network develops and flavor compounds are formed. Learning to read your dough - knowing when it has proofed enough - is a skill that comes with practice."
      },
      {
        heading: "Scoring and Baking",
        text: "Scoring allows the bread to expand in the oven without tearing. Use a sharp lame and slash with confidence. Baking in a Dutch oven helps trap steam, giving you that professional-looking crust."
      }
    ]
  }
];

export const CHEF_INSTRUCTORS: ChefInstructor[] = [
  {
    id: 1,
    name: 'Chef Siri',
    title: 'Sr Pastry Instructor',
    specialty: 'Macarons & Viennoiserie',
    description: 'Chef Siri specializes in the precision techniques of French pastry, with expertise in macarons, choux pastry, and viennoiserie. Her detailed approach to technique, laminating, and shaping helps students understand the science behind delicate bakes and perfect textures.',
    image: chefSiriImage
  },
  {
    id: 2,
    name: 'Chef Blessy',
    title: 'Pastry Instructor',
    specialty: 'Cakes, Breads & Petite Gâteaux',
    description: 'Chef Blessy brings versatility to the academy with her expertise in cake decoration, bread-making, and petite gâteaux. Her hands-on teaching style covers everything from structured sponges to artisan breads, helping students develop confidence across multiple baking disciplines.',
    image: chefBlessyImage
  },
  {
    id: 3,
    name: 'Chef Vardhini',
    title: 'Jr Pastry Instructor',
    specialty: 'Contemporary Cakes & Cake Decor',
    description: 'Chef Vardhini joins the team with a passion for modern cake design and decorative techniques. Her enthusiasm for contemporary styles and clean finishes adds a fresh perspective to cake decorating, helping students explore new approaches to their craft.',
    image: chefVardhiniImage
  },
  {
    id: 4,
    name: 'Chef Likitha',
    title: 'Jr Pastry Instructor',
    specialty: 'Contemporary Cakes & Cake Decor',
    description: 'Chef Likitha brings a keen eye for detail and precision to contemporary cake design. Her approach to modern aesthetics and finishing techniques helps students develop their decorative skills with clarity and confidence.',
    image: chefLikithaImage
  }
];

// Images
export { teamBgImage, freshImage1, freshImage2, freshImage3, freshImage4, freshImage5, freshImage6, freshImage7, freshImage8, freshImage9, freshImage10, freshImage11, freshImage12, freshImage13, freshImage14, freshImage15, freshImage16, freshImage17, freshImage18, academyClassroomImage };