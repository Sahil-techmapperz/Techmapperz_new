import mongoose from 'mongoose';

const ChallengeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

const SolutionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    features: [{ type: String }]
});

const ResultSchema = new mongoose.Schema({
    label: { type: String },
    value: { type: String },
    description: { type: String },
    icon: { type: String }
});

const TestimonialSchema = new mongoose.Schema({
    quote: { type: String },
    author: { type: String },
    position: { type: String }
});

const ProjectDetailsSchema = new mongoose.Schema({
    year: String,
    location: String,
    duration: String,
    teamSize: String,
    industry: String,
    projectType: String,
    coreFunctionality: String,
    businessGoal: String
}, { _id: false });

const GalleryImageSchema = new mongoose.Schema({
    src: { type: String, required: true },
    alt: { type: String }
});

const ExecutionStepSchema = new mongoose.Schema({
    step: String,
    title: String,
    desc: String
});

const CtaSchema = new mongoose.Schema({
    title: { type: String },
    heading: { type: String },
    description: { type: String },
    button1Text: { type: String },
    button1Link: { type: String },
    button2Text: { type: String },
    button2Link: { type: String }
});

const HighlightSchema = new mongoose.Schema({
    title: String,
    description: String
});

const PortfolioSchema = new mongoose.Schema({
    image: { type: String, required: true },
    category: { type: String, required: true },
    eyebrow: { type: String },
    techStack: { type: String },
    name: { type: String, required: true },
    headline: { type: String },
    breadcrumbTitle: { type: String },
    client: { type: String },
    showClientInHero: { type: Boolean, default: true },
    summary: { type: String },
    link: { type: String },
    slug: { type: String, required: true, unique: true },
    aliases: [{ type: String }],
    overviewTitle: { type: String },
    details: [{ type: String }],
    projectDetails: { type: ProjectDetailsSchema },
    challengeTitle: { type: String },
    challengeIntro: { type: String },
    challengeListIntro: { type: String },
    challengeItems: [{ type: String }],
    challenges: [ChallengeSchema],
    solutionTitle: { type: String },
    solutionsSummary: { type: String },
    solutionSecondary: { type: String },
    solutions: [SolutionSchema],
    deliverables: [{ type: String }],
    processTitle: { type: String },
    executionSteps: [ExecutionStepSchema],
    resultsTitle: { type: String },
    resultsSubtitle: { type: String },
    resultsLead: { type: String },
    results: [ResultSchema],
    galleryImages: [GalleryImageSchema],
    highlights: [HighlightSchema],
    relatedServices: [{ type: String }],
    cta: { type: CtaSchema },
    conclusion: { type: String },
    testimonial: { type: TestimonialSchema },
    seoTitle: { type: String },
    seoDescription: { type: String },
    createdAt: { type: Date, default: Date.now }
}, { strict: false });

const Portfolio = mongoose.models.portfolio || mongoose.model('portfolio', PortfolioSchema);
export default Portfolio;
