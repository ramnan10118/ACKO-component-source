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

/* ─── icons (inline SVGs to avoid extra deps) ────────────────────────── */

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);

const CarIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-1.5-1.5v-.75m10.5.75a1.5 1.5 0 0 0 1.5-1.5v-.75M3.75 12h16.5m-16.5 0a2.25 2.25 0 0 1-2.25-2.25V7.5A2.25 2.25 0 0 1 3.75 5.25h1.028a2.25 2.25 0 0 1 1.81.918l1.624 2.182h7.576l1.624-2.182a2.25 2.25 0 0 1 1.81-.918h1.028a2.25 2.25 0 0 1 2.25 2.25v2.25a2.25 2.25 0 0 1-2.25 2.25m-16.5 0v3.75m16.5-3.75v3.75M7.5 18.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm12 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
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

/* ─── data ────────────────────────────────────────────────────────────── */

const COVERAGE_PLANS = {
  basic: {
    name: "Third Party",
    price: "₹2,094",
    period: "/year",
    features: [
      "Third-party liability cover",
      "Personal accident cover",
      "Legal liability to paid driver",
    ],
  },
  standard: {
    name: "Comprehensive",
    price: "₹5,499",
    period: "/year",
    features: [
      "Everything in Third Party",
      "Own damage cover",
      "Fire & theft protection",
      "Natural calamity cover",
      "24/7 roadside assistance",
    ],
  },
  premium: {
    name: "Comprehensive+",
    price: "₹8,299",
    period: "/year",
    features: [
      "Everything in Comprehensive",
      "Zero depreciation",
      "Engine protector",
      "Return to invoice",
      "Consumables cover",
      "Key replacement",
      "Tyre protect",
    ],
  },
};

const FAQ_ITEMS = [
  {
    value: "what-is",
    trigger: "What is car insurance?",
    content:
      "Car insurance is a contract between you and an insurance company that protects you against financial loss in the event of an accident or theft. In exchange for paying a premium, the company agrees to pay your losses as outlined in your policy.",
  },
  {
    value: "types",
    trigger: "What types of car insurance are available?",
    content:
      "There are primarily two types: Third-Party Liability (mandatory by law, covers damage to others) and Comprehensive (covers both third-party liability and damage to your own vehicle from accidents, theft, fire, and natural disasters).",
  },
  {
    value: "ncb",
    trigger: "What is a No Claim Bonus (NCB)?",
    content:
      "NCB is a discount on your premium that you earn for every claim-free year. It starts at 20% after the first year and can go up to 50% after five consecutive claim-free years. This is one of the best ways to reduce your premium.",
  },
  {
    value: "documents",
    trigger: "What documents do I need to buy car insurance?",
    content:
      "You typically need your vehicle registration certificate (RC), previous policy details (if renewing), driving licence, and basic KYC documents like Aadhaar or PAN card.",
  },
  {
    value: "claim",
    trigger: "How do I file a claim?",
    content:
      "You can file a claim through our app or website in under 2 minutes. Simply upload photos of the damage, fill in the incident details, and our team will guide you through the cashless repair process at any of our 5,000+ network garages.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "Filed a claim after a fender bender. Got approval within 30 minutes and cashless repair at a garage near my office. Incredibly smooth!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    location: "Delhi",
    text: "Switched from another insurer because of the zero-depreciation add-on pricing. Saved almost ₹3,000 on my renewal. The process was entirely digital.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    location: "Bangalore",
    text: "Roadside assistance came through when my car broke down on the highway at 11 PM. Tow truck arrived in 45 minutes. Truly 24/7 support.",
    rating: 4,
  },
];

const COMPARISON_DATA = [
  { feature: "Third-party cover", thirdParty: true, comprehensive: true, comprehensivePlus: true },
  { feature: "Own damage cover", thirdParty: false, comprehensive: true, comprehensivePlus: true },
  { feature: "Personal accident cover", thirdParty: true, comprehensive: true, comprehensivePlus: true },
  { feature: "Fire & theft", thirdParty: false, comprehensive: true, comprehensivePlus: true },
  { feature: "Natural calamity", thirdParty: false, comprehensive: true, comprehensivePlus: true },
  { feature: "Roadside assistance", thirdParty: false, comprehensive: true, comprehensivePlus: true },
  { feature: "Zero depreciation", thirdParty: false, comprehensive: false, comprehensivePlus: true },
  { feature: "Engine protector", thirdParty: false, comprehensive: false, comprehensivePlus: true },
  { feature: "Return to invoice", thirdParty: false, comprehensive: false, comprehensivePlus: true },
  { feature: "Consumables cover", thirdParty: false, comprehensive: false, comprehensivePlus: true },
];

/* ─── App ─────────────────────────────────────────────────────────────── */

function App() {
  const [activeTab, setActiveTab] = useState("standard");
  const [carNumber, setCarNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [fuelType, setFuelType] = useState("petrol");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [paperless, setPaperless] = useState(true);

  const activePlan = COVERAGE_PLANS[activeTab as keyof typeof COVERAGE_PLANS];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Promo Alert ─────────────────────────────────────────────── */}
      {showAlert && (
        <Alert
          variant="success"
          dismissible
          onDismiss={() => setShowAlert(false)}
        >
          Limited time offer — Get 10% off on comprehensive plans. Use code ACKOCAR10 at checkout.
        </Alert>
      )}

      {/* ── Navigation ──────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 bg-purple-600 rounded-lg">
                <ShieldIcon />
              </div>
              <Typography variant="heading-md" weight="bold">
                Acko Car Insurance
              </Typography>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Typography variant="body-md" color="muted" className="cursor-pointer hover:text-gray-900 transition-colors">
                Plans
              </Typography>
              <Typography variant="body-md" color="muted" className="cursor-pointer hover:text-gray-900 transition-colors">
                Benefits
              </Typography>
              <Typography variant="body-md" color="muted" className="cursor-pointer hover:text-gray-900 transition-colors">
                Claims
              </Typography>
              <Typography variant="body-md" color="muted" className="cursor-pointer hover:text-gray-900 transition-colors">
                FAQs
              </Typography>
            </nav>
            <div className="flex items-center gap-3">
              <Tooltip content="Call us at 1800-266-2256" side="bottom">
                <Button variant="ghost" size="sm" iconLeft={<PhoneIcon />}>
                  1800-266-2256
                </Button>
              </Tooltip>
              <Button variant="primary" size="sm">
                Get a Quote
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
            { label: "Car Insurance" },
          ]}
        />
      </div>

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="solid" color="purple" size="md">
              #1 Digital-First Insurer
            </Badge>
            <Typography variant="display-lg" weight="bold" className="mt-4">
              Car insurance that actually makes sense
            </Typography>
            <Typography variant="body-lg" color="muted" className="mt-4 max-w-lg">
              Zero paperwork. Instant policy. 3-day claim settlement. Join 50 lakh+ happy car owners
              who trust Acko for their car insurance.
            </Typography>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Check Prices Now
              </Button>
              <Button variant="outline" size="lg">
                Renew Policy
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <Typography variant="heading-lg" weight="bold" color="primary">
                  50L+
                </Typography>
                <Typography variant="body-sm" color="muted">
                  Customers served
                </Typography>
              </div>
              <div>
                <Typography variant="heading-lg" weight="bold" color="primary">
                  3 days
                </Typography>
                <Typography variant="body-sm" color="muted">
                  Avg claim settlement
                </Typography>
              </div>
              <div>
                <Typography variant="heading-lg" weight="bold" color="primary">
                  5,000+
                </Typography>
                <Typography variant="body-sm" color="muted">
                  Network garages
                </Typography>
              </div>
            </div>
          </div>

          {/* ── Quote form card ──────────────────────────────────────── */}
          <Card variant="elevated" padding="lg">
            <CardHeader>
              <Typography variant="heading-md" weight="semibold">
                Get your quote in 30 seconds
              </Typography>
              <Typography variant="body-sm" color="muted" className="mt-1">
                No spam. No calls. Just your price.
              </Typography>
            </CardHeader>
            <CardContent className="space-y-4">
              <TextInput
                label="Car Registration Number"
                placeholder="e.g. MH 01 AB 1234"
                value={carNumber}
                onChange={setCarNumber}
                size="md"
              />
              <TextInput
                label="Full Name"
                placeholder="Enter your full name"
                value={fullName}
                onChange={setFullName}
                size="md"
              />
              <TextInput
                label="Mobile Number"
                placeholder="10-digit mobile number"
                value={mobile}
                onChange={setMobile}
                type="tel"
                size="md"
                prefix="+91"
              />
              <Dropdown
                label="Car Brand"
                placeholder="Select your car brand"
                options={[
                  { value: "maruti", label: "Maruti Suzuki" },
                  { value: "hyundai", label: "Hyundai" },
                  { value: "tata", label: "Tata Motors" },
                  { value: "mahindra", label: "Mahindra" },
                  { value: "kia", label: "Kia" },
                  { value: "toyota", label: "Toyota" },
                  { value: "honda", label: "Honda" },
                  { value: "mg", label: "MG Motor" },
                ]}
                value={carBrand}
                onChange={(v) => setCarBrand(v as string)}
                size="md"
              />
              <RadioGroup
                label="Fuel Type"
                options={[
                  { value: "petrol", label: "Petrol" },
                  { value: "diesel", label: "Diesel" },
                  { value: "cng", label: "CNG" },
                  { value: "electric", label: "Electric" },
                ]}
                value={fuelType}
                onChange={setFuelType}
                orientation="horizontal"
                size="sm"
              />
              <Checkbox
                label="I agree to the terms & conditions"
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

      {/* ── Why Acko ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Typography variant="heading-xl" weight="bold">
            Why 50 lakh+ drivers choose Acko
          </Typography>
          <Typography variant="body-lg" color="muted" className="mt-3 max-w-2xl mx-auto">
            Insurance designed for the digital age — transparent pricing, instant issuance,
            and hassle-free claims.
          </Typography>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <ShieldIcon />,
              title: "Comprehensive Cover",
              desc: "Protection against accidents, theft, fire, floods, and third-party liabilities.",
            },
            {
              icon: <ClockIcon />,
              title: "Instant Policy",
              desc: "Get insured in under 2 minutes. 100% digital, zero paperwork required.",
            },
            {
              icon: <WalletIcon />,
              title: "Best Prices",
              desc: "Save up to 85% on your premium. No middlemen, no hidden charges.",
            },
            {
              icon: <CarIcon />,
              title: "Fast Claims",
              desc: "AI-powered claims settled in 3 days on average. 5,000+ cashless garages.",
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
            Choose your coverage plan
          </Typography>
          <Typography variant="body-lg" color="muted" className="mt-3">
            Flexible plans that fit your budget and driving needs.
          </Typography>
        </div>

        <div className="flex justify-center mb-8">
          <Tabs
            items={[
              { value: "basic", label: "Third Party" },
              { value: "standard", label: "Comprehensive" },
              { value: "premium", label: "Comprehensive+" },
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
                  <div className="flex items-baseline gap-1 mt-1">
                    <Typography variant="display-sm" weight="bold" color="primary">
                      {activePlan.price}
                    </Typography>
                    <Typography variant="body-sm" color="muted">
                      {activePlan.period}
                    </Typography>
                  </div>
                </div>
                {activeTab === "standard" && (
                  <Badge variant="solid" color="green" size="sm">
                    Popular
                  </Badge>
                )}
                {activeTab === "premium" && (
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
                Buy {activePlan.name}
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
        </div>

        <Card variant="outline" padding="none">
          <Table hoverable>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Third Party</TableHead>
                <TableHead>Comprehensive</TableHead>
                <TableHead>Comprehensive+</TableHead>
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
                    {row.thirdParty ? (
                      <CheckCircleIcon />
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.comprehensive ? (
                      <CheckCircleIcon />
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.comprehensivePlus ? (
                      <CheckCircleIcon />
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>

      <Separator />

      {/* ── Claims Progress ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white rounded-2xl my-4">
        <div className="text-center mb-10">
          <Typography variant="heading-xl" weight="bold">
            Our claims track record
          </Typography>
          <Typography variant="body-lg" color="muted" className="mt-3">
            Real numbers, real transparency.
          </Typography>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <Progress value={96} size="lg" color="success" showLabel label="Claim approval rate" />
            <Typography variant="heading-sm" weight="bold" className="mt-3">
              96%
            </Typography>
            <Typography variant="body-sm" color="muted">
              Claims approved
            </Typography>
          </div>
          <div className="text-center">
            <Progress value={88} size="lg" color="primary" showLabel label="Digital settlement" />
            <Typography variant="heading-sm" weight="bold" className="mt-3">
              88%
            </Typography>
            <Typography variant="body-sm" color="muted">
              Settled digitally
            </Typography>
          </div>
          <div className="text-center">
            <Progress value={92} size="lg" color="success" showLabel label="Customer satisfaction" />
            <Typography variant="heading-sm" weight="bold" className="mt-3">
              4.6/5
            </Typography>
            <Typography variant="body-sm" color="muted">
              Customer rating
            </Typography>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Testimonials ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <Typography variant="heading-xl" weight="bold">
            Loved by drivers across India
          </Typography>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} variant="outline" padding="md">
              <CardContent>
                <div className="flex mb-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <Typography variant="body-md" className="italic">
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

      {/* ── FAQs ────────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <Typography variant="heading-xl" weight="bold">
            Frequently asked questions
          </Typography>
          <Typography variant="body-lg" color="muted" className="mt-3">
            Everything you need to know about car insurance.
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
              Ready to protect your ride?
            </Typography>
            <Typography variant="body-lg" className="mt-3 opacity-90 text-purple-100">
              Join 50 lakh+ car owners. Get your free quote in under 30 seconds.
            </Typography>
            <div className="mt-6 flex justify-center gap-4 items-center">
              <Button variant="secondary" size="lg">
                Get Free Quote
              </Button>
              <div className="flex items-center gap-2">
                <Switch checked={paperless} onChange={setPaperless} size="sm" />
                <Typography variant="body-sm" className="text-purple-100">
                  Go paperless
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-gray-400 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <ShieldIcon />
                </div>
                <Typography variant="heading-sm" weight="bold" className="text-white">
                  Acko
                </Typography>
              </div>
              <Typography variant="body-sm" className="text-gray-400">
                India's leading digital-first insurance company. IRDAI Licence No. 157.
              </Typography>
            </div>
            <div>
              <Typography variant="label-md" weight="semibold" className="text-white mb-3">
                Products
              </Typography>
              <ul className="space-y-2">
                {["Car Insurance", "Bike Insurance", "Health Insurance", "Travel Insurance"].map((item) => (
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
                {["About Us", "Careers", "Blog", "Contact"].map((item) => (
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
                {["Help Center", "Claim Process", "Grievance Redressal", "Terms & Conditions"].map((item) => (
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
              <Typography variant="caption" className="text-gray-500 hover:text-white cursor-pointer transition-colors">
                Privacy Policy
              </Typography>
              <Typography variant="caption" className="text-gray-500 hover:text-white cursor-pointer transition-colors">
                Terms of Service
              </Typography>
              <Typography variant="caption" className="text-gray-500 hover:text-white cursor-pointer transition-colors">
                Cookie Policy
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
