import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  User, 
  TrendingUp, 
  Droplets, 
  Leaf, 
  Heart,
  CheckCircle2,
  AlertCircle,
  Plus
} from 'lucide-react';

const therapyTypes = [
  { 
    name: 'Vamana', 
    description: 'Therapeutic vomiting', 
    color: 'bg-primary', 
    sessions: 5, 
    completed: 3,
    nextDate: '2024-01-15'
  },
  { 
    name: 'Virechana', 
    description: 'Purgation therapy', 
    color: 'bg-secondary', 
    sessions: 7, 
    completed: 2,
    nextDate: '2024-01-18'
  },
  { 
    name: 'Basti', 
    description: 'Medicated enema', 
    color: 'bg-accent', 
    sessions: 10, 
    completed: 6,
    nextDate: '2024-01-20'
  },
  { 
    name: 'Nasya', 
    description: 'Nasal administration', 
    color: 'bg-primary', 
    sessions: 3, 
    completed: 1,
    nextDate: '2024-01-22'
  }
];

const upcomingAppointments = [
  {
    therapy: 'Abhyanga Massage',
    practitioner: 'Dr. Priya Sharma',
    time: '10:00 AM',
    date: 'Today',
    status: 'confirmed'
  },
  {
    therapy: 'Shirodhara',
    practitioner: 'Dr. Raj Kumar',
    time: '2:30 PM',
    date: 'Tomorrow',
    status: 'pending'
  },
  {
    therapy: 'Panchakarma Consultation',
    practitioner: 'Dr. Anita Gupta',
    time: '11:00 AM',
    date: 'Jan 20',
    status: 'confirmed'
  }
];

export default function Dashboard() {
  const [selectedTherapy, setSelectedTherapy] = useState(therapyTypes[0]);

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Welcome Section */}
      <div className="therapy-card">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-[#2F5249]">Welcome back, Patient</h1>
            <p className="text-muted-foreground">Your healing journey continues with personalized Panchakarma therapies</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gradient-secondary">78%</div>
            <div className="text-sm text-muted-foreground">Treatment Progress</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="therapy-card border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">Sessions Completed</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="therapy-card border-secondary/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-muted-foreground">Upcoming This Week</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="therapy-card border-accent/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-accent/10 rounded-xl">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold">89%</div>
                <div className="text-sm text-muted-foreground">Health Score</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="therapy-card border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">45</div>
                <div className="text-sm text-muted-foreground">Days in Treatment</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Therapy Progress */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="therapy-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-primary" />
                <span>Active Therapies</span>
              </CardTitle>
              <CardDescription>Track your Panchakarma treatment progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {therapyTypes.map((therapy, index) => (
                <div key={therapy.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${therapy.color}`} />
                      <div>
                        <div className="font-medium">{therapy.name}</div>
                        <div className="text-sm text-muted-foreground">{therapy.description}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{therapy.completed}/{therapy.sessions}</div>
                      <div className="text-xs text-muted-foreground">Sessions</div>
                    </div>
                  </div>
                  <Progress 
                    value={(therapy.completed / therapy.sessions) * 100} 
                    className="h-2"
                  />
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Next: {therapy.nextDate}</span>
                    <Badge variant="outline" className="text-xs">
                      {Math.round((therapy.completed / therapy.sessions) * 100)}% Complete
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Appointments */}
        <div className="space-y-6">
          <Card className="therapy-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Upcoming</span>
                </div>
                <Button variant="ghost" size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-healing">
                  <div className="flex-shrink-0 mt-1">
                    {appointment.status === 'confirmed' ? (
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-secondary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{appointment.therapy}</div>
                    <div className="text-xs text-muted-foreground">{appointment.practitioner}</div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs font-medium">{appointment.time}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{appointment.date}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              <Button variant="therapy" className="w-full mt-4">
                <Calendar className="w-4 h-4" />
                View All Appointments
              </Button>
            </CardContent>
          </Card>

          {/* Health Insights */}
          <Card className="therapy-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Droplets className="w-5 h-5 text-accent" />
                <span>Health Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Dosha Balance</span>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Improving
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Energy Levels</span>
                  <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                    High
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sleep Quality</span>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                    Good
                  </Badge>
                </div>
              </div>
              
              <Button variant="calm" className="w-full">
                View Detailed Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}