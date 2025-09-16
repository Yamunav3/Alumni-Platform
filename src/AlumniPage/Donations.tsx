import { useState } from "react";
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
  FileText
} from "lucide-react";
import { AlumniNavbar } from "@/components/AlumniNavbar";

const AlumniDonations = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donationType, setDonationType] = useState("general");
  const [paymentMethod, setPaymentMethod] = useState("card");

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
      image: "/placeholder-scholarship.jpg"
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
      image: "/placeholder-infrastructure.jpg"
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
      image: "/placeholder-research.jpg"
    }
  ];

  const donationCategories = [
    {
      id: "general",
      title: "General Fund",
      description: "Support overall institutional development and operations",
      icon: University,
      suggested: [100, 250, 500]
    },
    {
      id: "scholarship",
      title: "Scholarships",
      description: "Help deserving students access quality education",
      icon: Award,
      suggested: [500, 1000, 2500]
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      description: "Contribute to building and maintaining campus facilities",
      icon: Building,
      suggested: [250, 500, 1000]
    },
    {
      id: "research",
      title: "Research",
      description: "Fund innovative research and development projects",
      icon: Lightbulb,
      suggested: [200, 500, 1500]
    },
    {
      id: "technology",
      title: "Technology",
      description: "Support digital transformation and tech infrastructure",
      icon: Globe,
      suggested: [150, 300, 750]
    }
  ];

  const recentDonations = [
    {
      donor: "Sarah Johnson",
      amount: "$5,000",
      purpose: "Scholarship Fund",
      date: "2 hours ago",
      type: "individual"
    },
    {
      donor: "Microsoft Corporation",
      amount: "$25,000",
      purpose: "Technology Infrastructure",
      date: "1 day ago",
      type: "corporate"
    },
    {
      donor: "Anonymous",
      amount: "$1,500",
      purpose: "General Fund",
      date: "2 days ago",
      type: "individual"
    },
    {
      donor: "Alumni Class of 2010",
      amount: "$8,000",
      purpose: "Research Innovation",
      date: "3 days ago",
      type: "group"
    }
  ];

  const impactStats = [
    { label: "Total Donations", value: "$1.2M", change: "+15%", icon: Heart },
    { label: "Active Donors", value: "2,450", change: "+8%", icon: Users },
    { label: "Scholarships Awarded", value: "150", change: "+25%", icon: Award },
    { label: "Projects Funded", value: "45", change: "+12%", icon: Target }
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <AlumniNavbar/>
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Support Our Mission</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your contributions help us build a brighter future for education and innovation
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="donate" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="donate">Make Donation</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
            <TabsTrigger value="transparency">Transparency</TabsTrigger>
          </TabsList>

          {/* Make Donation */}
          <TabsContent value="donate" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
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
                                  className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-accent/50 peer-checked:border-primary peer-checked:bg-primary/5"
                                >
                                  <Icon className="h-5 w-5 text-primary mt-0.5" />
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
                            className="h-12"
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
                          className="pl-10"
                        />
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <Label className="text-base font-medium mb-4 block">Payment Method</Label>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 p-3 border rounded-lg">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="flex items-center cursor-pointer">
                              <CreditCard className="h-4 w-4 mr-2" />
                              Credit/Debit Card
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-lg">
                            <RadioGroupItem value="upi" id="upi" />
                            <Label htmlFor="upi" className="flex items-center cursor-pointer">
                              <Smartphone className="h-4 w-4 mr-2" />
                              UPI Payment
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-lg">
                            <RadioGroupItem value="bank" id="bank" />
                            <Label htmlFor="bank" className="flex items-center cursor-pointer">
                              <Building className="h-4 w-4 mr-2" />
                              Bank Transfer
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
                        className="mt-2"
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Donation Summary */}
              <div className="space-y-6">
                <Card>
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
                    <div className="flex justify-between font-semibold">
                      <span>Total:</span>
                      <span>${donationAmount || "0"}</span>
                    </div>
                    <Button 
                      className="w-full" 
                      size="lg"
                      disabled={!donationAmount || donationAmount === "0"}
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      Donate Now
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Your donation is secure and tax-deductible
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Your Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span>Tax-deductible donation</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span>100% goes to chosen cause</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span>Transparent usage reporting</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span>Regular impact updates</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Fundraising Campaigns */}
          <TabsContent value="campaigns" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Active Campaigns</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Support specific initiatives that are making a real difference in our community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{campaign.category}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {campaign.daysLeft} days left
                      </span>
                    </div>
                    <CardTitle className="text-xl">{campaign.title}</CardTitle>
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

                      <Button className="w-full">
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
          <TabsContent value="impact" className="space-y-6">
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
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                          <p className="text-3xl font-bold">{stat.value}</p>
                          <p className="text-sm text-green-600">{stat.change} this year</p>
                        </div>
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Recent Donations */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Contributions</CardTitle>
                <CardDescription>
                  Latest donations from our generous community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDonations.map((donation, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full ${
                          donation.type === 'corporate' ? 'bg-blue-100 text-blue-600' :
                          donation.type === 'group' ? 'bg-green-100 text-green-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          {donation.type === 'corporate' ? <Building className="h-4 w-4" /> :
                           donation.type === 'group' ? <Users className="h-4 w-4" /> :
                           <Heart className="h-4 w-4" />}
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
          <TabsContent value="transparency" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Transparency & Accountability</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe in complete transparency about how your donations are used
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-600" />
                    Fund Allocation
                  </CardTitle>
                  <CardDescription>
                    How we distribute and use donated funds
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Info className="h-5 w-5 mr-2 text-blue-600" />
                    Reporting & Updates
                  </CardTitle>
                  <CardDescription>
                    Regular updates on donation usage and impact
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Monthly impact reports</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Annual financial audits</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Project completion updates</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Donor feedback integration</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    View Latest Report
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Financial Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium">Scholarship Distribution</p>
                      <p className="text-sm text-muted-foreground">25 students received aid</p>
                    </div>
                    <span className="text-green-600 font-semibold">-$45,000</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium">Infrastructure Investment</p>
                      <p className="text-sm text-muted-foreground">Library renovation project</p>
                    </div>
                    <span className="text-blue-600 font-semibold">-$85,000</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
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