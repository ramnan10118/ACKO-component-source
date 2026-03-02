import { useState } from "react";
import { Typography } from "@acko/typography";
import { Button } from "@acko/button";
import { Card, CardHeader, CardContent, CardFooter } from "@acko/card";
import { Badge } from "@acko/badge";
import { Tabs } from "@acko/tabs";
import { TextInput } from "@acko/text-input";
import { Dropdown } from "@acko/dropdown";
import { RadioGroup } from "@acko/radio";
import { Checkbox } from "@acko/checkbox";
import { Accordion } from "@acko/accordion";
import { Avatar } from "@acko/avatar";
import { Separator } from "@acko/separator";
import { Tooltip } from "@acko/tooltip";
import { Alert } from "@acko/alert";
import { Progress } from "@acko/progress";
import { Switch } from "@acko/switch";
import { Breadcrumb } from "@acko/breadcrumb";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@acko/table";

/* ─── Icons (inline SVGs) ────────────────────────────────────────────── */

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
);

const HospitalIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const WalletIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
  </svg>
);

const UserGroupIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const CrossIcon = () => (
  <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

const StethoscopeIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5m-4.75-11.396c.251.023.501.05.75.082M19 14.5a2.25 2.25 0 0 1 0 4.5m0-4.5v4.5m-14-4.5a2.25 2.25 0 0 0 0 4.5m0-4.5v4.5" />
  </svg>
);

/* ─── Data ────────────────────────────────────────────────────────────── */

const HEALTH_PLANS = {
  individual: {
    name: "Individual",
    price: "₹4,999",
    period: "/year",
    sumInsured: "₹5 Lakh",
    features: [
      "Hospitalisation cover up to ₹5 Lakh",
      "Pre & post hospitalisation (60/180 days)",
      "Day-care procedures covered",
      "Ambulance charges up to ₹2,000",
      "No room rent capping",
    ],
  },
  family: {
    name: "Family Floater",
    price: "₹9,999",
    period: "/year",
    sumInsured: "₹10 Lakh",
    features: [
      "Covers self, spouse & 2 children",
      "Shared sum insured of ₹10 Lakh",
      "Maternity & newborn cover",
      "Pre & post hospitalisation (60/180 days)",
      "Day-care procedures covered",
      "No room rent capping",
      "Annual health check-up",
    ],
  },
  super: {
    name: "Super Top-Up",
    price: "₹14,999",
    period: "/year",
    sumInsured: "₹25 Lakh",
    features: [
      "Everything in Family Floater",
      "Sum insured of ₹25 Lakh",
      "₹50 Lakh critical illness cover",
      "Worldwide emergency cover",
      "Restore benefit (100% sum insured)",
      "AYUSH treatment covered",
      "Organ donor expenses",
      "Second medical opinion",
    ],
  },
};

const FAQ_ITEMS = [
  {
    value: "what-is",
    trigger: "What is health insurance?",
    content:
      "Health insurance is a type of insurance that covers medical expenses incurred due to illness, injury, or hospitalisation. It reimburses the policyholder for covered medical expenses or pays the healthcare provider directly through cashless claims at network hospitals.",
  },
  {
    value: "waiting-period",
    trigger: "What is the waiting period?",
    content:
      "Most health insurance policies have a 30-day initial waiting period for non-accident claims. Pre-existing diseases typically have a 2-4 year waiting period, while specific illnesses may have a 1-2 year waiting period. With Acko, pre-existing disease waiting is reduced to just 2 years.",
  },
  {
    value: "cashless",
    trigger: "How does cashless treatment work?",
    content:
      "At any of our 14,000+ network hospitals, you can avail cashless treatment. Simply show your Acko health card at the hospital, and we settle the bill directly with the hospital. No upfront payment needed — you only pay the non-covered expenses, if any.",
  },
  {
    value: "tax",
    trigger: "Can I get tax benefits on health insurance?",
    content:
      "Yes! Premiums paid for health insurance are eligible for tax deduction under Section 80D of the Income Tax Act. You can claim up to ₹25,000 for self and family, and an additional ₹50,000 for senior citizen parents — saving you up to ₹15,600 in taxes.",
  },
  {
    value: "claim",
    trigger: "How do I file a health insurance claim?",
    content:
      "For cashless claims, simply visit a network hospital and share your policy details. For reimbursement claims, upload your hospital bills, discharge summary, and prescriptions through our app or website. Our AI processes most claims within 24 hours of document submission.",
  },
  {
    value: "family-cover",
    trigger: "Can I add family members later?",
    content:
      "Yes, you can add family members to your existing policy during renewal. Newborns are automatically covered from day one under the Family Floater and Super Top-Up plans at no additional cost for the first 90 days.",
  },
];

const TESTIMONIALS = [
  {
    name: "Meera Krishnan",
    location: "Chennai",
    text: "My father needed emergency surgery. The cashless process at Apollo was seamless — approved in 20 minutes. The ₹3.2 lakh bill was settled without any hassle.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    location: "Pune",
    text: "Switched from a traditional insurer. Acko's plan is 40% cheaper for the same ₹10 lakh cover. The app makes managing the policy incredibly easy.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    text: "Filed a reimbursement claim for my delivery expenses. Got ₹1.8 lakh credited to my account in just 3 days. The maternity cover is genuinely comprehensive.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    text: "The annual health check-up benefit is great. Booked it through the app, walked into a diagnostic centre near home, and done. No extra cost.",
    rating: 4,
  },
];

const COMPARISON_DATA = [
  { feature: "Hospitalisation cover", individual: true, family: true, superTopUp: true },
  { feature: "Pre/post hospitalisation", individual: true, family: true, superTopUp: true },
  { feature: "Day-care procedures", individual: true, family: true, superTopUp: true },
  { feature: "No room rent capping", individual: true, family: true, superTopUp: true },
  { feature: "Maternity & newborn", individual: false, family: true, superTopUp: true },
  { feature: "Annual health check-up", individual: false, family: true, superTopUp: true },
  { feature: "Critical illness cover", individual: false, family: false, superTopUp: true },
  { feature: "Worldwide emergency", individual: false, family: false, superTopUp: true },
  { feature: "Restore benefit", individual: false, family: false, superTopUp: true },
  { feature: "AYUSH treatment", individual: false, family: false, superTopUp: true },
  { feature: "Organ donor expenses", individual: false, family: false, superTopUp: true },
];

const NETWORK_STATS = [
  { label: "Network hospitals", value: "14,000+" },
  { label: "Cities covered", value: "700+" },
  { label: "Avg claim time", value: "24 hrs" },
  { label: "Claim approval rate", value: "97%" },
];

/* ─── App ─────────────────────────────────────────────────────────────── */

function App() {
  const [activeTab, setActiveTab] = useState("family");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [members, setMembers] = useState("self-spouse");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [paperless, setPaperless] = useState(true);
  const [existingCondition, setExistingCondition] = useState("no");

  const activePlan = HEALTH_PLANS[activeTab as keyof typeof HEALTH_PLANS];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Promo Alert ─────────────────────────────────────────────── */}
      {showAlert && (
        <Alert
          variant="success"
          dismissible
          onDismiss={() => setShowAlert(false)}
        >
          Special offer — Get 2 months extra cover FREE on all health plans purchased this month. Use code ACKOHEALTH.
        </Alert>
      )}

      {/* ── Navigation ──────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 bg-purple-600 rounded-lg text-white">
                <ShieldIcon />
              </div>
              <Typography variant="heading-md" weight="bold">
                Acko Health Insurance
              </Typography>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              {["Plans", "Benefits", "Hospitals", "Claims", "FAQs"].map((item) => (
                <Typography
                  key={item}
                  variant="body-md"
                  color="muted"
                  className="cursor-pointer hover:text-gray-900 transition-colors"
                >
                  {item}
                </Typography>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Tooltip content="Call us at 1800-266-2256 (toll-free)" side="bottom">
                <Button variant="ghost" size="sm" iconLeft={<PhoneIcon />}>
                  1800-266-2256
                </Button>
              </Tooltip>
              <Button variant="primary" size="sm">
                Get Covered
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Breadcrumb ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Insurance", href: "/insurance" },
            { label: "Health Insurance" },
          ]}
        />
      </div>

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Badge variant="solid" color="purple" size="md">
              Trusted by 1 Crore+ Indians
            </Badge>
            <Typography variant="display-lg" weight="bold" className="mt-4">
              Health insurance that puts your family first
            </Typography>
            <Typography variant="body-lg" color="muted" className="mt-4 max-w-lg">
              Comprehensive health coverage starting at just ₹14/day. Cashless treatment at
              14,000+ hospitals, 24-hour claims, and zero hidden charges.
            </Typography>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Check Prices Now
              </Button>
              <Button variant="outline" size="lg">
                Renew Policy
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {NETWORK_STATS.map((stat) => (
                <div key={stat.label}>
                  <Typography variant="heading-lg" weight="bold" color="primary">
                    {stat.value}
                  </Typography>
                  <Typography variant="body-sm" color="muted">
                    {stat.label}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          {/* ── Quote Form Card ──────────────────────────────────────── */}
          <Card variant="elevated" padding="lg">
            <CardHeader>
              <Typography variant="heading-md" weight="semibold">
                Get your health insurance quote
              </Typography>
              <Typography variant="body-sm" color="muted" className="mt-1">
                Free quote in 30 seconds. No spam calls.
              </Typography>
            </CardHeader>
            <CardContent className="space-y-4">
              <TextInput
                label="Full Name"
                placeholder="Enter your full name"
                value={fullName}
                onChange={setFullName}
                size="md"
              />
              <div className="grid grid-cols-2 gap-4">
                <TextInput
                  label="Age"
                  placeholder="e.g. 30"
                  value={age}
                  onChange={setAge}
                  type="number"
                  size="md"
                />
                <Dropdown
                  label="City"
                  placeholder="Select city"
                  options={[
                    { value: "mumbai", label: "Mumbai" },
                    { value: "delhi", label: "Delhi NCR" },
                    { value: "bangalore", label: "Bangalore" },
                    { value: "chennai", label: "Chennai" },
                    { value: "hyderabad", label: "Hyderabad" },
                    { value: "pune", label: "Pune" },
                    { value: "kolkata", label: "Kolkata" },
                    { value: "other", label: "Other" },
                  ]}
                  value={city}
                  onChange={(v) => setCity(v as string)}
                  size="md"
                />
              </div>
              <TextInput
                label="Mobile Number"
                placeholder="10-digit mobile number"
                value={mobile}
                onChange={setMobile}
                type="tel"
                size="md"
                prefix="+91"
              />
              <TextInput
                label="Email Address"
                placeholder="you@example.com"
                value={email}
                onChange={setEmail}
                type="email"
                size="md"
              />
              <Dropdown
                label="Members to Cover"
                placeholder="Select members"
                options={[
                  { value: "self", label: "Self Only" },
                  { value: "self-spouse", label: "Self + Spouse" },
                  { value: "self-spouse-kids", label: "Self + Spouse + Kids" },
                  { value: "parents", label: "Parents" },
                  { value: "family", label: "Entire Family" },
                ]}
                value={members}
                onChange={(v) => setMembers(v as string)}
                size="md"
              />
              <RadioGroup
                label="Any pre-existing conditions?"
                options={[
                  { value: "no", label: "No" },
                  { value: "diabetes", label: "Diabetes" },
                  { value: "bp", label: "Blood Pressure" },
                  { value: "other", label: "Other" },
                ]}
                value={existingCondition}
                onChange={setExistingCondition}
                orientation="horizontal"
                size="sm"
              />
              <Checkbox
                label="I agree to the terms & conditions and privacy policy"
                checked={agreeTerms}
                onChange={setAgreeTerms}
                size="sm"
              />
            </CardContent>
            <CardFooter>
              <Button variant="primary" size="lg" fullWidth>
                View My Price
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <Separator />

      {/* ── Why Acko Health ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Typography variant="heading-xl" weight="bold">
            Why choose Acko Health Insurance?
          </Typography>
          <Typography variant="body-lg" color="muted" className="mt-3 max-w-2xl mx-auto">
            Built for modern India — transparent, affordable, and designed to
            make healthcare accessible for every family.
          </Typography>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <HospitalIcon />,
              title: "14,000+ Network Hospitals",
              desc: "Cashless treatment at India's best hospitals including Apollo, Fortis, Max, and Narayana Health across 700+ cities.",
            },
            {
              icon: <ClockIcon />,
              title: "24-Hour Claims",
              desc: "AI-powered claims engine processes and settles most claims within 24 hours. No lengthy paperwork.",
            },
            {
              icon: <WalletIcon />,
              title: "Save up to 60%",
              desc: "No intermediaries or branch overheads. We pass the savings directly to you with India's most competitive premiums.",
            },
            {
              icon: <HeartIcon />,
              title: "No Room Rent Limits",
              desc: "Choose any room — single, twin-sharing, or suite. No sub-limits that reduce your effective cover.",
            },
            {
              icon: <UserGroupIcon />,
              title: "Family-First Plans",
              desc: "Cover your entire family under a single policy. Maternity, newborn cover, and annual health check-ups included.",
            },
            {
              icon: <StethoscopeIcon />,
              title: "Preventive Care",
              desc: "Free annual health check-ups, teleconsultations, and wellness programs to keep you healthy year-round.",
            },
          ].map((item) => (
            <Card key={item.title} variant="outline" padding="md" className="hover:shadow-md transition-shadow">
              <CardContent>
                <div className="w-12 h-12 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <Typography variant="heading-sm" weight="semibold">
                  {item.title}
                </Typography>
                <Typography variant="body-sm" color="muted" className="mt-2">
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* ── Coverage Plans ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <Typography variant="heading-xl" weight="bold">
            Pick the plan that fits your family
          </Typography>
          <Typography variant="body-lg" color="muted" className="mt-3">
            Flexible health plans with no hidden charges and genuine coverage.
          </Typography>
        </div>

        <div className="flex justify-center mb-8">
          <Tabs
            items={[
              { value: "individual", label: "Individual" },
              { value: "family", label: "Family Floater" },
              { value: "super", label: "Super Top-Up" },
            ]}
            value={activeTab}
            onChange={setActiveTab}
            variant="pill"
            size="md"
          />
        </div>

        <div className="max-w-md mx-auto">
          <Card variant="elevated" padding="lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <Typography variant="heading-md" weight="bold">
                    {activePlan.name}
                  </Typography>
                  <Typography variant="body-sm" color="muted" className="mt-0.5">
                    Sum Insured: {activePlan.sumInsured}
                  </Typography>
                  <div className="flex items-baseline gap-1 mt-2">
                    <Typography variant="display-sm" weight="bold" color="primary">
                      {activePlan.price}
                    </Typography>
                    <Typography variant="body-sm" color="muted">
                      {activePlan.period}
                    </Typography>
                  </div>
                </div>
                {activeTab === "family" && (
                  <Badge variant="solid" color="green" size="sm">
                    Most Popular
                  </Badge>
                )}
                {activeTab === "super" && (
                  <Badge variant="solid" color="orange" size="sm">
                    Best Value
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {activePlan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircleIcon />
                    <Typography variant="body-md">{f}</Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="primary" size="lg" fullWidth>
                Buy {activePlan.name} Plan
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <Separator />

      {/* ── Plan Comparison Table ───────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <Typography variant="heading-xl" weight="bold">
            Compare plans side by side
          </Typography>
          <Typography variant="body-md" color="muted" className="mt-3">
            See exactly what each plan covers so you can make the right choice.
          </Typography>
        </div>

        <Card variant="outline" padding="none">
          <Table hoverable>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Individual</TableHead>
                <TableHead>Family Floater</TableHead>
                <TableHead>Super Top-Up</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {COMPARISON_DATA.map((row) => (
                <TableRow key={row.feature}>
                  <TableCell>
                    <Typography variant="body-sm" weight="medium">
                      {row.feature}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {row.individual ? <CheckCircleIcon /> : <CrossIcon />}
                  </TableCell>
                  <TableCell>
                    {row.family ? <CheckCircleIcon /> : <CrossIcon />}
                  </TableCell>
                  <TableCell>
                    {row.superTopUp ? <CheckCircleIcon /> : <CrossIcon />}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>
                  <Typography variant="body-sm" weight="bold">
                    Starting at
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body-sm" weight="bold" color="primary">₹4,999/yr</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body-sm" weight="bold" color="primary">₹9,999/yr</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body-sm" weight="bold" color="primary">₹14,999/yr</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      <Separator />

      {/* ── Claims Track Record ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white rounded-2xl my-4">
        <div className="text-center mb-10">
          <Typography variant="heading-xl" weight="bold">
            Our claims speak for themselves
          </Typography>
          <Typography variant="body-lg" color="muted" className="mt-3">
            Transparent numbers you can trust.
          </Typography>
        </div>

        <div className="grid sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <Progress value={97} size="lg" color="success" showLabel label="Claims approved" />
            <Typography variant="heading-sm" weight="bold" className="mt-3">
              97%
            </Typography>
            <Typography variant="body-sm" color="muted">
              Claims approved
            </Typography>
          </div>
          <div className="text-center">
            <Progress value={92} size="lg" color="primary" showLabel label="Cashless settlements" />
            <Typography variant="heading-sm" weight="bold" className="mt-3">
              92%
            </Typography>
            <Typography variant="body-sm" color="muted">
              Cashless settlements
            </Typography>
          </div>
          <div className="text-center">
            <Progress value={85} size="lg" color="success" showLabel label="Under 24 hours" />
            <Typography variant="heading-sm" weight="bold" className="mt-3">
              85%
            </Typography>
            <Typography variant="body-sm" color="muted">
              Settled under 24hrs
            </Typography>
          </div>
          <div className="text-center">
            <Progress value={94} size="lg" color="primary" showLabel label="Satisfaction" />
            <Typography variant="heading-sm" weight="bold" className="mt-3">
              4.7/5
            </Typography>
            <Typography variant="body-sm" color="muted">
              Customer rating
            </Typography>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── How It Works ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Typography variant="heading-xl" weight="bold">
            Get covered in 3 simple steps
          </Typography>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              step: "01",
              title: "Tell us about yourself",
              desc: "Share your age, city, and family details. Takes less than 30 seconds.",
              color: "bg-purple-100 text-purple-700",
            },
            {
              step: "02",
              title: "Choose your plan",
              desc: "Compare plans, customise your cover, and pick what works for your family.",
              color: "bg-blue-100 text-blue-700",
            },
            {
              step: "03",
              title: "Pay & get insured",
              desc: "Secure checkout. Policy issued instantly to your email and the Acko app.",
              color: "bg-green-100 text-green-700",
            },
          ].map((item) => (
            <Card key={item.step} variant="outline" padding="md" className="text-center hover:shadow-md transition-shadow">
              <CardContent>
                <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mx-auto mb-4`}>
                  <Typography variant="heading-md" weight="bold">
                    {item.step}
                  </Typography>
                </div>
                <Typography variant="heading-sm" weight="semibold">
                  {item.title}
                </Typography>
                <Typography variant="body-sm" color="muted" className="mt-2">
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* ── Testimonials ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <Typography variant="heading-xl" weight="bold">
            Trusted by families across India
          </Typography>
          <Typography variant="body-lg" color="muted" className="mt-3">
            Real stories from real policyholders.
          </Typography>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} variant="outline" padding="md" className="hover:shadow-md transition-shadow">
              <CardContent>
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <Typography variant="body-sm" className="italic leading-relaxed">
                  "{t.text}"
                </Typography>
                <div className="flex items-center gap-3 mt-4">
                  <Avatar initials={t.name.split(" ").map((n) => n[0]).join("")} size="sm" />
                  <div>
                    <Typography variant="label-md" weight="semibold">
                      {t.name}
                    </Typography>
                    <Typography variant="caption" color="muted">
                      {t.location}
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* ── Tax Benefits ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" color="green" size="md">
              Section 80D Benefits
            </Badge>
            <Typography variant="heading-xl" weight="bold" className="mt-4">
              Save up to ₹15,600 in taxes
            </Typography>
            <Typography variant="body-lg" color="muted" className="mt-4">
              Your health insurance premium is eligible for tax deduction under Section 80D
              of the Income Tax Act. That means you get protection and save money on taxes — it's a win-win.
            </Typography>
            <div className="mt-6 space-y-3">
              {[
                "Up to ₹25,000 deduction for self & family",
                "Additional ₹50,000 for senior citizen parents",
                "Preventive health check-up (up to ₹5,000)",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircleIcon />
                  <Typography variant="body-md">{benefit}</Typography>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="primary" size="lg">
                Calculate Tax Savings
              </Button>
            </div>
          </div>
          <Card variant="elevated" padding="lg" className="bg-green-50 border-green-200">
            <CardContent>
              <Typography variant="heading-md" weight="semibold" className="mb-6">
                Tax savings example
              </Typography>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body-sm" color="muted">Premium (self & family)</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body-sm" weight="semibold">₹25,000</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body-sm" color="muted">Premium (parents, 60+)</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body-sm" weight="semibold">₹50,000</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body-sm" color="muted">Total deduction</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body-sm" weight="bold" color="primary">₹75,000</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body-sm" color="muted">Tax saved (30% bracket)</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body-sm" weight="bold" color="primary">₹15,600*</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Typography variant="caption" color="muted" className="mt-4 block">
                *Includes 4% health & education cess. Actual savings depend on your tax slab.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* ── FAQs ────────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <Typography variant="heading-xl" weight="bold">
            Frequently asked questions
          </Typography>
          <Typography variant="body-lg" color="muted" className="mt-3">
            Everything you need to know about health insurance.
          </Typography>
        </div>

        <Accordion type="single" items={FAQ_ITEMS} collapsible defaultValue="what-is" />
      </section>

      <Separator />

      {/* ── CTA Banner ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card variant="elevated" padding="lg" className="bg-purple-600 text-white text-center">
          <CardContent>
            <Typography variant="display-sm" weight="bold" className="text-white">
              Your family's health can't wait
            </Typography>
            <Typography variant="body-lg" className="mt-3 opacity-90 text-purple-100">
              Join 1 crore+ Indians who trust Acko. Get covered in under 2 minutes.
            </Typography>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 items-center">
              <Button variant="secondary" size="lg">
                Get Free Quote
              </Button>
              <div className="flex items-center gap-2">
                <Switch checked={paperless} onChange={setPaperless} size="sm" />
                <Typography variant="body-sm" className="text-purple-100">
                  100% paperless process
                </Typography>
              </div>
            </div>
            <Typography variant="caption" className="mt-4 block text-purple-200">
              No medical tests required for ages 18-45 with Individual & Family plans.
            </Typography>
          </CardContent>
        </Card>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-gray-400 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white">
                  <ShieldIcon />
                </div>
                <Typography variant="heading-sm" weight="bold" className="text-white">
                  Acko
                </Typography>
              </div>
              <Typography variant="body-sm" className="text-gray-400">
                India's leading digital-first insurance company. IRDAI Licence No. 157.
                CIN: U66000MH2016PLC287385.
              </Typography>
            </div>
            <div>
              <Typography variant="label-md" weight="semibold" className="text-white mb-3">
                Products
              </Typography>
              <ul className="space-y-2">
                {["Health Insurance", "Car Insurance", "Bike Insurance", "Travel Insurance", "Group Health"].map((item) => (
                  <li key={item}>
                    <Typography variant="body-sm" className="text-gray-400 hover:text-white cursor-pointer transition-colors">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Typography variant="label-md" weight="semibold" className="text-white mb-3">
                Company
              </Typography>
              <ul className="space-y-2">
                {["About Us", "Careers", "Blog", "Press", "Contact"].map((item) => (
                  <li key={item}>
                    <Typography variant="body-sm" className="text-gray-400 hover:text-white cursor-pointer transition-colors">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Typography variant="label-md" weight="semibold" className="text-white mb-3">
                Support
              </Typography>
              <ul className="space-y-2">
                {["Help Center", "Claim Process", "Network Hospitals", "Grievance Redressal", "Terms & Conditions"].map((item) => (
                  <li key={item}>
                    <Typography variant="body-sm" className="text-gray-400 hover:text-white cursor-pointer transition-colors">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-8 opacity-20" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Typography variant="caption" className="text-gray-500">
              © 2026 Acko General Insurance Ltd. All rights reserved.
            </Typography>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map((item) => (
                <Typography key={item} variant="caption" className="text-gray-500 hover:text-white cursor-pointer transition-colors">
                  {item}
                </Typography>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
