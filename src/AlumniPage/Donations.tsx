// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Progress } from "@/components/ui/progress";
// import { Separator } from "@/components/ui/separator";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Textarea } from "@/components/ui/textarea";
// import { 
//   Heart, 
//   DollarSign, 
//   Target,
//   Users,
//   Building,
//   BookOpen,
//   Award,
//   TrendingUp,
//   CheckCircle,
//   CreditCard,
//   Smartphone,
//   University,
//   Lightbulb,
//   Globe,
//   Shield,
//   Star,
//   Gift,
//   Calendar,
//   ArrowRight,
//   Info,
//   FileText
// } from "lucide-react";
// import { AlumniNavbar } from "@/components/AlumniNavbar";

// const AlumniDonations = () => {
//   const [donationAmount, setDonationAmount] = useState("");
//   const [donationType, setDonationType] = useState("general");
//   const [paymentMethod, setPaymentMethod] = useState("card");

//   const quickAmounts = [50, 100, 250, 500, 1000, 2500];

//   const campaigns = [
//     {
//       id: 1,
//       title: "Student Scholarship Fund",
//       description: "Supporting deserving students with financial assistance for their education",
//       goal: 100000,
//       raised: 67500,
//       donors: 145,
//       daysLeft: 45,
//       category: "Education",
//       impact: "25 scholarships awarded this year",
//       image: "/placeholder-scholarship.jpg"
//     },
//     {
//       id: 2,
//       title: "Campus Infrastructure Development",
//       description: "Building modern facilities and upgrading existing infrastructure",
//       goal: 250000,
//       raised: 180000,
//       donors: 89,
//       daysLeft: 60,
//       category: "Infrastructure",
//       impact: "New library and research center",
//       image: "/placeholder-infrastructure.jpg"
//     },
//     {
//       id: 3,
//       title: "Research Innovation Fund",
//       description: "Funding cutting-edge research projects and innovation initiatives",
//       goal: 75000,
//       raised: 45000,
//       donors: 67,
//       daysLeft: 30,
//       category: "Research",
//       impact: "12 research projects supported",
//       image: "/placeholder-research.jpg"
//     }
//   ];

//   const donationCategories = [
//     {
//       id: "general",
//       title: "General Fund",
//       description: "Support overall institutional development and operations",
//       icon: University,
//       suggested: [100, 250, 500]
//     },
//     {
//       id: "scholarship",
//       title: "Scholarships",
//       description: "Help deserving students access quality education",
//       icon: Award,
//       suggested: [500, 1000, 2500]
//     },
//     {
//       id: "infrastructure",
//       title: "Infrastructure",
//       description: "Contribute to building and maintaining campus facilities",
//       icon: Building,
//       suggested: [250, 500, 1000]
//     },
//     {
//       id: "research",
//       title: "Research",
//       description: "Fund innovative research and development projects",
//       icon: Lightbulb,
//       suggested: [200, 500, 1500]
//     },
//     {
//       id: "technology",
//       title: "Technology",
//       description: "Support digital transformation and tech infrastructure",
//       icon: Globe,
//       suggested: [150, 300, 750]
//     }
//   ];

//   const recentDonations = [
//     {
//       donor: "Sarah Johnson",
//       amount: "$5,000",
//       purpose: "Scholarship Fund",
//       date: "2 hours ago",
//       type: "individual"
//     },
//     {
//       donor: "Microsoft Corporation",
//       amount: "$25,000",
//       purpose: "Technology Infrastructure",
//       date: "1 day ago",
//       type: "corporate"
//     },
//     {
//       donor: "Anonymous",
//       amount: "$1,500",
//       purpose: "General Fund",
//       date: "2 days ago",
//       type: "individual"
//     },
//     {
//       donor: "Alumni Class of 2010",
//       amount: "$8,000",
//       purpose: "Research Innovation",
//       date: "3 days ago",
//       type: "group"
//     }
//   ];

//   const impactStats = [
//     { label: "Total Donations", value: "$1.2M", change: "+15%", icon: Heart },
//     { label: "Active Donors", value: "2,450", change: "+8%", icon: Users },
//     { label: "Scholarships Awarded", value: "150", change: "+25%", icon: Award },
//     { label: "Projects Funded", value: "45", change: "+12%", icon: Target }
//   ];

//   const getProgressPercentage = (raised: number, goal: number) => {
//     return Math.min((raised / goal) * 100, 100);
//   };

//   const formatCurrency = (amount: number) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0,
//     }).format(amount);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <AlumniNavbar/>

//        <section className="relative py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5">
//         <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
//             Support Our Mission
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Your contributions help us build a brighter future for education and innovation
//             </p>
//         </div>
//       </section>


//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <Tabs defaultValue="donate" className="w-full">
//           <TabsList className="grid w-full grid-cols-4">
//             <TabsTrigger value="donate">Make Donation</TabsTrigger>
//             <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
//             <TabsTrigger value="impact">Impact</TabsTrigger>
//             <TabsTrigger value="transparency">Transparency</TabsTrigger>
//           </TabsList>

//           {/* Make Donation */}
//           <TabsContent value="donate" className="space-y-6">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               <div className="lg:col-span-2 space-y-6">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center">
//                       <Heart className="h-5 w-5 mr-2 text-red-500" />
//                       Choose Your Contribution
//                     </CardTitle>
//                     <CardDescription>
//                       Select a category and amount that aligns with your passion
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-6">
//                     {/* Donation Categories */}
//                     <div>
//                       <Label className="text-base font-medium mb-4 block">Select Purpose</Label>
//                       <RadioGroup value={donationType} onValueChange={setDonationType}>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           {donationCategories.map((category) => {
//                             const Icon = category.icon;
//                             return (
//                               <div key={category.id} className="relative">
//                                 <RadioGroupItem
//                                   value={category.id}
//                                   id={category.id}
//                                   className="peer sr-only"
//                                 />
//                                 <Label
//                                   htmlFor={category.id}
//                                   className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-accent/50 peer-checked:border-primary peer-checked:bg-primary/5"
//                                 >
//                                   <Icon className="h-5 w-5 text-primary mt-0.5" />
//                                   <div>
//                                     <div className="font-medium">{category.title}</div>
//                                     <div className="text-sm text-muted-foreground">
//                                       {category.description}
//                                     </div>
//                                   </div>
//                                 </Label>
//                               </div>
//                             );
//                           })}
//                         </div>
//                       </RadioGroup>
//                     </div>

//                     {/* Quick Amount Selection */}
//                     <div>
//                       <Label className="text-base font-medium mb-4 block">Select Amount</Label>
//                       <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
//                         {quickAmounts.map((amount) => (
//                           <Button
//                             key={amount}
//                             variant={donationAmount === amount.toString() ? "default" : "outline"}
//                             onClick={() => setDonationAmount(amount.toString())}
//                             className="h-12"
//                           >
//                             ${amount}
//                           </Button>
//                         ))}
//                       </div>
//                       <div className="relative">
//                         <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                         <Input
//                           type="number"
//                           placeholder="Enter custom amount"
//                           value={donationAmount}
//                           onChange={(e) => setDonationAmount(e.target.value)}
//                           className="pl-10"
//                         />
//                       </div>
//                     </div>

//                     {/* Payment Method */}
//                     <div>
//                       <Label className="text-base font-medium mb-4 block">Payment Method</Label>
//                       <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
//                         <div className="space-y-3">
//                           <div className="flex items-center space-x-3 p-3 border rounded-lg">
//                             <RadioGroupItem value="card" id="card" />
//                             <Label htmlFor="card" className="flex items-center cursor-pointer">
//                               <CreditCard className="h-4 w-4 mr-2" />
//                               Credit/Debit Card
//                             </Label>
//                           </div>
//                           <div className="flex items-center space-x-3 p-3 border rounded-lg">
//                             <RadioGroupItem value="upi" id="upi" />
//                             <Label htmlFor="upi" className="flex items-center cursor-pointer">
//                               <Smartphone className="h-4 w-4 mr-2" />
//                               UPI Payment
//                             </Label>
//                           </div>
//                           <div className="flex items-center space-x-3 p-3 border rounded-lg">
//                             <RadioGroupItem value="bank" id="bank" />
//                             <Label htmlFor="bank" className="flex items-center cursor-pointer">
//                               <Building className="h-4 w-4 mr-2" />
//                               Bank Transfer
//                             </Label>
//                           </div>
//                         </div>
//                       </RadioGroup>
//                     </div>

//                     {/* Personal Message */}
//                     <div>
//                       <Label htmlFor="message" className="text-base font-medium">
//                         Personal Message (Optional)
//                       </Label>
//                       <Textarea
//                         id="message"
//                         placeholder="Share why you're supporting this cause..."
//                         className="mt-2"
//                         rows={3}
//                       />
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>

//               {/* Donation Summary */}
//               <div className="space-y-6">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Donation Summary</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <div className="flex justify-between">
//                       <span>Amount:</span>
//                       <span className="font-medium">
//                         ${donationAmount || "0"}
//                       </span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Purpose:</span>
//                       <span className="font-medium">
//                         {donationCategories.find(c => c.id === donationType)?.title}
//                       </span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Payment:</span>
//                       <span className="font-medium capitalize">{paymentMethod}</span>
//                     </div>
//                     <Separator />
//                     <div className="flex justify-between font-semibold">
//                       <span>Total:</span>
//                       <span>${donationAmount || "0"}</span>
//                     </div>
//                     <Button 
//                       className="w-full" 
//                       size="lg"
//                       disabled={!donationAmount || donationAmount === "0"}
//                     >
//                       <Heart className="h-4 w-4 mr-2" />
//                       Donate Now
//                     </Button>
//                     <p className="text-xs text-muted-foreground text-center">
//                       Your donation is secure and tax-deductible
//                     </p>
//                   </CardContent>
//                 </Card>

//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="text-lg">Your Impact</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-3 text-sm">
//                       <div className="flex items-center">
//                         <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
//                         <span>Tax-deductible donation</span>
//                       </div>
//                       <div className="flex items-center">
//                         <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
//                         <span>100% goes to chosen cause</span>
//                       </div>
//                       <div className="flex items-center">
//                         <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
//                         <span>Transparent usage reporting</span>
//                       </div>
//                       <div className="flex items-center">
//                         <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
//                         <span>Regular impact updates</span>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </TabsContent>

//           {/* Fundraising Campaigns */}
//           <TabsContent value="campaigns" className="space-y-6">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold mb-4">Active Campaigns</h2>
//               <p className="text-muted-foreground max-w-2xl mx-auto">
//                 Support specific initiatives that are making a real difference in our community
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {campaigns.map((campaign) => (
//                 <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
//                   <CardHeader>
//                     <div className="flex items-center justify-between mb-2">
//                       <Badge variant="outline">{campaign.category}</Badge>
//                       <span className="text-sm text-muted-foreground">
//                         {campaign.daysLeft} days left
//                       </span>
//                     </div>
//                     <CardTitle className="text-xl">{campaign.title}</CardTitle>
//                     <CardDescription>{campaign.description}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       <div>
//                         <div className="flex justify-between text-sm mb-2">
//                           <span className="font-medium">Progress</span>
//                           <span>{Math.round(getProgressPercentage(campaign.raised, campaign.goal))}%</span>
//                         </div>
//                         <Progress 
//                           value={getProgressPercentage(campaign.raised, campaign.goal)} 
//                           className="h-2"
//                         />
//                       </div>

//                       <div className="flex justify-between text-sm">
//                         <div>
//                           <div className="font-semibold text-lg">
//                             {formatCurrency(campaign.raised)}
//                           </div>
//                           <div className="text-muted-foreground">
//                             raised of {formatCurrency(campaign.goal)}
//                           </div>
//                         </div>
//                         <div className="text-right">
//                           <div className="font-semibold">{campaign.donors}</div>
//                           <div className="text-muted-foreground">donors</div>
//                         </div>
//                       </div>

//                       <div className="bg-muted/50 p-3 rounded-lg">
//                         <p className="text-sm font-medium mb-1">Impact</p>
//                         <p className="text-sm text-muted-foreground">{campaign.impact}</p>
//                       </div>

//                       <Button className="w-full">
//                         <Gift className="h-4 w-4 mr-2" />
//                         Support This Campaign
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           {/* Impact Dashboard */}
//           <TabsContent value="impact" className="space-y-6">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold mb-4">Our Impact Together</h2>
//               <p className="text-muted-foreground max-w-2xl mx-auto">
//                 See how your contributions are making a real difference in our community
//               </p>
//             </div>

//             {/* Impact Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//               {impactStats.map((stat, index) => {
//                 const Icon = stat.icon;
//                 return (
//                   <Card key={index}>
//                     <CardContent className="pt-6">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
//                           <p className="text-3xl font-bold">{stat.value}</p>
//                           <p className="text-sm text-green-600">{stat.change} this year</p>
//                         </div>
//                         <Icon className="h-8 w-8 text-primary" />
//                       </div>
//                     </CardContent>
//                   </Card>
//                 );
//               })}
//             </div>

//             {/* Recent Donations */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Recent Contributions</CardTitle>
//                 <CardDescription>
//                   Latest donations from our generous community
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {recentDonations.map((donation, index) => (
//                     <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
//                       <div className="flex items-center space-x-3">
//                         <div className={`p-2 rounded-full ${
//                           donation.type === 'corporate' ? 'bg-blue-100 text-blue-600' :
//                           donation.type === 'group' ? 'bg-green-100 text-green-600' :
//                           'bg-purple-100 text-purple-600'
//                         }`}>
//                           {donation.type === 'corporate' ? <Building className="h-4 w-4" /> :
//                            donation.type === 'group' ? <Users className="h-4 w-4" /> :
//                            <Heart className="h-4 w-4" />}
//                         </div>
//                         <div>
//                           <p className="font-medium">{donation.donor}</p>
//                           <p className="text-sm text-muted-foreground">{donation.purpose}</p>
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <p className="font-semibold text-lg">{donation.amount}</p>
//                         <p className="text-sm text-muted-foreground">{donation.date}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           {/* Transparency */}
//           <TabsContent value="transparency" className="space-y-6">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold mb-4">Transparency & Accountability</h2>
//               <p className="text-muted-foreground max-w-2xl mx-auto">
//                 We believe in complete transparency about how your donations are used
//               </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center">
//                     <Shield className="h-5 w-5 mr-2 text-green-600" />
//                     Fund Allocation
//                   </CardTitle>
//                   <CardDescription>
//                     How we distribute and use donated funds
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="space-y-3">
//                     <div className="flex justify-between items-center">
//                       <div className="flex items-center">
//                         <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
//                         <span>Direct Programs</span>
//                       </div>
//                       <span className="font-medium">85%</span>
//                     </div>
//                     <Progress value={85} className="h-2" />
//                   </div>
                  
//                   <div className="space-y-3">
//                     <div className="flex justify-between items-center">
//                       <div className="flex items-center">
//                         <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
//                         <span>Administrative</span>
//                       </div>
//                       <span className="font-medium">10%</span>
//                     </div>
//                     <Progress value={10} className="h-2" />
//                   </div>
                  
//                   <div className="space-y-3">
//                     <div className="flex justify-between items-center">
//                       <div className="flex items-center">
//                         <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
//                         <span>Fundraising</span>
//                       </div>
//                       <span className="font-medium">5%</span>
//                     </div>
//                     <Progress value={5} className="h-2" />
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center">
//                     <Info className="h-5 w-5 mr-2 text-blue-600" />
//                     Reporting & Updates
//                   </CardTitle>
//                   <CardDescription>
//                     Regular updates on donation usage and impact
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="space-y-3">
//                     <div className="flex items-center">
//                       <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
//                       <span className="text-sm">Monthly impact reports</span>
//                     </div>
//                     <div className="flex items-center">
//                       <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
//                       <span className="text-sm">Annual financial audits</span>
//                     </div>
//                     <div className="flex items-center">
//                       <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
//                       <span className="text-sm">Project completion updates</span>
//                     </div>
//                     <div className="flex items-center">
//                       <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
//                       <span className="text-sm">Donor feedback integration</span>
//                     </div>
//                   </div>
                  
//                   <Button variant="outline" className="w-full">
//                     <FileText className="h-4 w-4 mr-2" />
//                     View Latest Report
//                   </Button>
//                 </CardContent>
//               </Card>
//             </div>

//             <Card>
//               <CardHeader>
//                 <CardTitle>Recent Financial Activity</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
//                     <div>
//                       <p className="font-medium">Scholarship Distribution</p>
//                       <p className="text-sm text-muted-foreground">25 students received aid</p>
//                     </div>
//                     <span className="text-green-600 font-semibold">-$45,000</span>
//                   </div>
                  
//                   <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
//                     <div>
//                       <p className="font-medium">Infrastructure Investment</p>
//                       <p className="text-sm text-muted-foreground">Library renovation project</p>
//                     </div>
//                     <span className="text-blue-600 font-semibold">-$85,000</span>
//                   </div>
                  
//                   <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
//                     <div>
//                       <p className="font-medium">Research Grants</p>
//                       <p className="text-sm text-muted-foreground">12 projects funded</p>
//                     </div>
//                     <span className="text-purple-600 font-semibold">-$30,000</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default AlumniDonations;





import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { 
  Heart, 
  DollarSign, 
  Target,
  Users,
  Building,
  BookOpen,
  Award,
  TrendingUp,
  CheckCircle,
  CreditCard,
  Smartphone,
  University,
  Lightbulb,
  Globe,
  Shield,
  Star,
  Gift,
  Calendar,
  ArrowRight,
  Info,
  FileText,
  Sparkles,
  Zap,
  ChevronRight,
  RotateCcw,
  BarChart3,
  PieChart
} from "lucide-react";
import { AlumniNavbar } from "@/components/AlumniNavbar";
import { useToast } from "@/components/ui/use-toast";

const AlumniDonations = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donationType, setDonationType] = useState("general");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isDonating, setIsDonating] = useState(false);
  const [activeCampaignIndex, setActiveCampaignIndex] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    // Auto-rotate campaigns
    const interval = setInterval(() => {
      setActiveCampaignIndex((prev) => (prev + 1) % campaigns.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const quickAmounts = [50, 100, 250, 500, 1000, 2500];

  const campaigns = [
    {
      id: 1,
      title: "Student Scholarship Fund",
      description: "Supporting deserving students with financial assistance for their education",
      goal: 100000,
      raised: 67500,
      donors: 145,
      daysLeft: 45,
      category: "Education",
      impact: "25 scholarships awarded this year",
      image: "/placeholder-scholarship.jpg",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Campus Infrastructure Development",
      description: "Building modern facilities and upgrading existing infrastructure",
      goal: 250000,
      raised: 180000,
      donors: 89,
      daysLeft: 60,
      category: "Infrastructure",
      impact: "New library and research center",
      image: "/placeholder-infrastructure.jpg",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Research Innovation Fund",
      description: "Funding cutting-edge research projects and innovation initiatives",
      goal: 75000,
      raised: 45000,
      donors: 67,
      daysLeft: 30,
      category: "Research",
      impact: "12 research projects supported",
      image: "/placeholder-research.jpg",
      color: "from-amber-500 to-orange-600"
    }
  ];

  const donationCategories = [
    {
      id: "general",
      title: "General Fund",
      description: "Support overall institutional development and operations",
      icon: University,
      suggested: [100, 250, 500],
      color: "bg-gradient-to-r from-blue-500 to-indigo-600"
    },
    {
      id: "scholarship",
      title: "Scholarships",
      description: "Help deserving students access quality education",
      icon: Award,
      suggested: [500, 1000, 2500],
      color: "bg-gradient-to-r from-purple-500 to-pink-600"
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      description: "Contribute to building and maintaining campus facilities",
      icon: Building,
      suggested: [250, 500, 1000],
      color: "bg-gradient-to-r from-green-500 to-teal-600"
    },
    {
      id: "research",
      title: "Research",
      description: "Fund innovative research and development projects",
      icon: Lightbulb,
      suggested: [200, 500, 1500],
      color: "bg-gradient-to-r from-amber-500 to-orange-600"
    },
    {
      id: "technology",
      title: "Technology",
      description: "Support digital transformation and tech infrastructure",
      icon: Globe,
      suggested: [150, 300, 750],
      color: "bg-gradient-to-r from-cyan-500 to-blue-600"
    }
  ];

  const recentDonations = [
    {
      donor: "Sarah Johnson",
      amount: "$5,000",
      purpose: "Scholarship Fund",
      date: "2 hours ago",
      type: "individual",
      image: "/placeholder-avatar1.jpg"
    },
    {
      donor: "Microsoft Corporation",
      amount: "$25,000",
      purpose: "Technology Infrastructure",
      date: "1 day ago",
      type: "corporate",
      image: "/placeholder-avatar2.jpg"
    },
    {
      donor: "Anonymous",
      amount: "$1,500",
      purpose: "General Fund",
      date: "2 days ago",
      type: "individual",
      image: "/placeholder-avatar3.jpg"
    },
    {
      donor: "Alumni Class of 2010",
      amount: "$8,000",
      purpose: "Research Innovation",
      date: "3 days ago",
      type: "group",
      image: "/placeholder-avatar4.jpg"
    }
  ];

  const impactStats = [
    { label: "Total Donations", value: "$1.2M", change: "+15%", icon: Heart, color: "text-red-500" },
    { label: "Active Donors", value: "2,450", change: "+8%", icon: Users, color: "text-blue-500" },
    { label: "Scholarships Awarded", value: "150", change: "+25%", icon: Award, color: "text-purple-500" },
    { label: "Projects Funded", value: "45", change: "+12%", icon: Target, color: "text-green-500" }
  ];

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleDonate = () => {
    if (!donationAmount || donationAmount === "0") return;
    
    setIsDonating(true);
    
    // Simulate donation processing
    setTimeout(() => {
      setIsDonating(false);
      toast({
        title: "Donation Successful!",
        description: `Thank you for your donation of $${donationAmount} to the ${donationCategories.find(c => c.id === donationType)?.title}`,
      });
      setDonationAmount("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <AlumniNavbar/>

      {/* Hero Section with Animated Background */}
      <section className="relative py-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Support Our Mission
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Your contributions help us build a brighter future for education and innovation
          </p>
        </div>
      </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         <Tabs defaultValue="donate" className="w-full">
          <TabsList className="grid w-full grid-cols-4 ">
             <TabsTrigger value="donate">Make Donation</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
            <TabsTrigger value="transparency">Transparency</TabsTrigger>
              </TabsList>

          {/* Make Donation */}
          <TabsContent value="donate" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-red-500" />
                      Choose Your Contribution
                    </CardTitle>
                    <CardDescription>
                      Select a category and amount that aligns with your passion
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Donation Categories */}
                    <div>
                      <Label className="text-base font-medium mb-4 block">Select Purpose</Label>
                      <RadioGroup value={donationType} onValueChange={setDonationType}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {donationCategories.map((category) => {
                            const Icon = category.icon;
                            return (
                              <div key={category.id} className="relative">
                                <RadioGroupItem
                                  value={category.id}
                                  id={category.id}
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor={category.id}
                                  className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:shadow-md transition-all duration-200 peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20"
                                >
                                  <div className={`p-2 rounded-lg ${category.color}`}>
                                    <Icon className="h-5 w-5 text-white" />
                                  </div>
                                  <div>
                                    <div className="font-medium">{category.title}</div>
                                    <div className="text-sm text-muted-foreground">
                                      {category.description}
                                    </div>
                                  </div>
                                </Label>
                              </div>
                            );
                          })}
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Quick Amount Selection */}
                    <div>
                      <Label className="text-base font-medium mb-4 block">Select Amount</Label>
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                        {quickAmounts.map((amount) => (
                          <Button
                            key={amount}
                            variant={donationAmount === amount.toString() ? "default" : "outline"}
                            onClick={() => setDonationAmount(amount.toString())}
                            className="h-12 transition-all duration-200 hover:scale-105"
                          >
                            ${amount}
                          </Button>
                        ))}
                      </div>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="number"
                          placeholder="Enter custom amount"
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                          className="pl-10 py-6 text-lg"
                        />
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <Label className="text-base font-medium mb-4 block">Payment Method</Label>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className="relative">
                            <RadioGroupItem value="card" id="card" className="peer sr-only" />
                            <Label 
                              htmlFor="card" 
                              className="flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer hover:bg-accent/50 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-2 peer-checked:ring-primary/20 transition-all duration-200"
                            >
                              <CreditCard className="h-6 w-6 mb-2 text-primary" />
                              <span>Credit/Debit Card</span>
                            </Label>
                          </div>
                          <div className="relative">
                            <RadioGroupItem value="upi" id="upi" className="peer sr-only" />
                            <Label 
                              htmlFor="upi" 
                              className="flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer hover:bg-accent/50 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-2 peer-checked:ring-primary/20 transition-all duration-200"
                            >
                              <Smartphone className="h-6 w-6 mb-2 text-primary" />
                              <span>UPI Payment</span>
                            </Label>
                          </div>
                          <div className="relative">
                            <RadioGroupItem value="bank" id="bank" className="peer sr-only" />
                            <Label 
                              htmlFor="bank" 
                              className="flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer hover:bg-accent/50 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-2 peer-checked:ring-primary/20 transition-all duration-200"
                            >
                              <Building className="h-6 w-6 mb-2 text-primary" />
                              <span>Bank Transfer</span>
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Personal Message */}
                    <div>
                      <Label htmlFor="message" className="text-base font-medium">
                        Personal Message (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Share why you're supporting this cause..."
                        className="mt-2 resize-none"
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Donation Summary */}
              <div className="space-y-6">
                <Card className="sticky top-6 border-0 shadow-lg overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                  <CardHeader>
                    <CardTitle>Donation Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Amount:</span>
                      <span className="font-medium">
                        ${donationAmount || "0"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Purpose:</span>
                      <span className="font-medium">
                        {donationCategories.find(c => c.id === donationType)?.title}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment:</span>
                      <span className="font-medium capitalize">{paymentMethod}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span>${donationAmount || "0"}</span>
                    </div>
                    <Button 
                      className="w-full py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-lg" 
                      size="lg"
                      disabled={!donationAmount || donationAmount === "0" || isDonating}
                      onClick={handleDonate}
                    >
                      {isDonating ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Heart className="h-5 w-5 mr-2" />
                          Donate Now
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      <Shield className="h-3 w-3 inline mr-1" />
                      Your donation is secure and tax-deductible
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-green-500 to-teal-600"></div>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Sparkles className="h-5 w-5 mr-2 text-green-600" />
                      Your Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center p-2 rounded-lg hover:bg-accent/50 transition-colors duration-200">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span>Tax-deductible donation</span>
                      </div>
                      <div className="flex items-center p-2 rounded-lg hover:bg-accent/50 transition-colors duration-200">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span>100% goes to chosen cause</span>
                      </div>
                      <div className="flex items-center p-2 rounded-lg hover:bg-accent/50 transition-colors duration-200">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span>Transparent usage reporting</span>
                      </div>
                      <div className="flex items-center p-2 rounded-lg hover:bg-accent/50 transition-colors duration-200">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span>Regular impact updates</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Fundraising Campaigns */}
          <TabsContent value="campaigns" className="space-y-6 mt-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Active Campaigns</h2>
            </div>

            {/* Featured Campaign Carousel */}
            <div className="relative h-96  rounded-xl overflow-hidden shadow-lg mb-12">
              {campaigns.map((campaign, index) => (
                <div 
                  key={campaign.id} 
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === activeCampaignIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${campaign.color} opacity-90`}></div>
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center px-8 text-white">
                    <Badge variant="secondary" className="mb-4 w-fit">{campaign.category}</Badge>
                    <h3 className="text-3xl font-bold mb-4">{campaign.title}</h3>
                    <p className="text-xl mb-6 max-w-2xl">{campaign.description}</p>
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{Math.round(getProgressPercentage(campaign.raised, campaign.goal))}%</span>
                      </div>
                      <Progress 
                        value={getProgressPercentage(campaign.raised, campaign.goal)} 
                        className="h-3 bg-white/30"
                      />
                    </div>
                    <div className="flex justify-between mb-6">
                      <div>
                        <div className="text-2xl font-bold">{formatCurrency(campaign.raised)}</div>
                        <div className="text-white/80">raised of {formatCurrency(campaign.goal)}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{campaign.donors}</div>
                        <div className="text-white/80">donors</div>
                      </div>
                    </div>
                    <Button size="lg" className="w-fit rounded-full px-6">
                      Support This Campaign <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                {campaigns.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === activeCampaignIndex ? 'bg-white' : 'bg-white/50'}`}
                    onClick={() => setActiveCampaignIndex(index)}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="hover:shadow-lg transition-all duration-300 overflow-hidden group">
                  <div className={`h-2 ${campaign.color}`}></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{campaign.category}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {campaign.daysLeft} days left
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{campaign.title}</CardTitle>
                    <CardDescription>{campaign.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium">Progress</span>
                          <span>{Math.round(getProgressPercentage(campaign.raised, campaign.goal))}%</span>
                        </div>
                        <Progress 
                          value={getProgressPercentage(campaign.raised, campaign.goal)} 
                          className="h-2"
                        />
                      </div>

                      <div className="flex justify-between text-sm">
                        <div>
                          <div className="font-semibold text-lg">
                            {formatCurrency(campaign.raised)}
                          </div>
                          <div className="text-muted-foreground">
                            raised of {formatCurrency(campaign.goal)}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{campaign.donors}</div>
                          <div className="text-muted-foreground">donors</div>
                        </div>
                      </div>

                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-sm font-medium mb-1">Impact</p>
                        <p className="text-sm text-muted-foreground">{campaign.impact}</p>
                      </div>

                      <Button className="w-full group-hover:scale-105 transition-transform duration-300">
                        <Gift className="h-4 w-4 mr-2" />
                        Support This Campaign
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Impact Dashboard */}
          <TabsContent value="impact" className="space-y-6 mt-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Impact Together</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how your contributions are making a real difference in our community
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {impactStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                          <p className="text-3xl font-bold">{stat.value}</p>
                          <p className="text-sm text-green-600">{stat.change} this year</p>
                        </div>
                        <div className="p-3 rounded-full bg-primary/10">
                          <Icon className={`h-6 w-6 ${stat.color}`} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Recent Donations */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-muted/50">
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Recent Contributions
                </CardTitle>
                <CardDescription>
                  Latest donations from our generous community
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {recentDonations.map((donation, index) => (
                    <div key={index} className="flex items-center justify-between p-6 hover:bg-accent/50 transition-colors duration-200">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full ${
                          donation.type === 'corporate' ? 'bg-blue-100 text-blue-600' :
                          donation.type === 'group' ? 'bg-green-100 text-green-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          {donation.type === 'corporate' ? <Building className="h-5 w-5" /> :
                           donation.type === 'group' ? <Users className="h-5 w-5" /> :
                           <Heart className="h-5 w-5" />}
                        </div>
                        <div>
                          <p className="font-medium">{donation.donor}</p>
                          <p className="text-sm text-muted-foreground">{donation.purpose}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-lg">{donation.amount}</p>
                        <p className="text-sm text-muted-foreground">{donation.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Transparency */}
          <TabsContent value="transparency" className="space-y-6 mt-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Transparency & Accountability</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe in complete transparency about how your donations are used
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                  <CardTitle className="flex items-center">
                    <PieChart className="h-5 w-5 mr-2 text-primary" />
                    Fund Allocation
                  </CardTitle>
                  <CardDescription>
                    How we distribute and use donated funds
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                        <span>Direct Programs</span>
                      </div>
                      <span className="font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span>Administrative</span>
                      </div>
                      <span className="font-medium">10%</span>
                    </div>
                    <Progress value={10} className="h-2" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                        <span>Fundraising</span>
                      </div>
                      <span className="font-medium">5%</span>
                    </div>
                    <Progress value={5} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                  <CardTitle className="flex items-center">
                    <Info className="h-5 w-5 mr-2 text-primary" />
                    Reporting & Updates
                  </CardTitle>
                  <CardDescription>
                    Regular updates on donation usage and impact
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center p-3 rounded-lg hover:bg-accent/50 transition-colors duration-200">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">Monthly impact reports</span>
                    </div>
                    <div className="flex items-center p-3 rounded-lg hover:bg-accent/50 transition-colors duration-200">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">Annual financial audits</span>
                    </div>
                    <div className="flex items-center p-3 rounded-lg hover:bg-accent/50 transition-colors duration-200">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">Project completion updates</span>
                    </div>
                    <div className="flex items-center p-3 rounded-lg hover:bg-accent/50 transition-colors duration-200">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">Donor feedback integration</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    <FileText className="h-4 w-4 mr-2" />
                    View Latest Report
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle>Recent Financial Activity</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  <div className="flex justify-between items-center p-6 hover:bg-green-50 transition-colors duration-200">
                    <div>
                      <p className="font-medium">Scholarship Distribution</p>
                      <p className="text-sm text-muted-foreground">25 students received aid</p>
                    </div>
                    <span className="text-green-600 font-semibold">-$45,000</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-6 hover:bg-blue-50 transition-colors duration-200">
                    <div>
                      <p className="font-medium">Infrastructure Investment</p>
                      <p className="text-sm text-muted-foreground">Library renovation project</p>
                    </div>
                    <span className="text-blue-600 font-semibold">-$85,000</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-6 hover:bg-purple-50 transition-colors duration-200">
                    <div>
                      <p className="font-medium">Research Grants</p>
                      <p className="text-sm text-muted-foreground">12 projects funded</p>
                    </div>
                    <span className="text-purple-600 font-semibold">-$30,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
    </div>
    </div>
  );
};

export default AlumniDonations;