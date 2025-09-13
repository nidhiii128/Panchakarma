import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Droplets, 
  Wind, 
  Leaf, 
  Sparkles, 
  Clock, 
  Users, 
  Star,
  BookOpen,
  Calendar,
  ArrowRight
} from 'lucide-react';

const therapies = [
  {
    id: 'vamana',
    name: 'Vamana',
    title: 'Therapeutic Vomiting',
    description: 'Eliminates excess Kapha dosha through controlled therapeutic vomiting',
    duration: '3-5 days',
    difficulty: 'Advanced',
    icon: Droplets,
    color: 'primary',
    benefits: ['Respiratory Health', 'Weight Management', 'Skin Clarity', 'Mental Clarity'],
    precautions: ['Fasting required', 'Medical supervision', 'Post-therapy rest'],
    sessions: 5,
    rating: 4.8
  },
  {
    id: 'virechana',
    name: 'Virechana',
    title: 'Purgation Therapy',
    description: 'Cleanses excess Pitta dosha through medicated purgation',
    duration: '5-7 days',
    difficulty: 'Intermediate',
    icon: Wind,
    color: 'secondary',
    benefits: ['Liver Detox', 'Digestive Health', 'Skin Disorders', 'Blood Purification'],
    precautions: ['Proper diet preparation', 'Hydration important', 'Gradual recovery'],
    sessions: 7,
    rating: 4.9
  },
  {
    id: 'basti',
    name: 'Basti',
    title: 'Medicated Enema',
    description: 'Balances Vata dosha through specialized medicated enemas',
    duration: '8-16 days',
    difficulty: 'Intermediate',
    icon: Leaf,
    color: 'accent',
    benefits: ['Joint Health', 'Neurological Disorders', 'Digestive Issues', 'Reproductive Health'],
    precautions: ['Proper positioning', 'Temperature control', 'Post-treatment care'],
    sessions: 10,
    rating: 4.7
  },
  {
    id: 'nasya',
    name: 'Nasya',
    title: 'Nasal Administration',
    description: 'Administers medicated oils through nasal passages',
    duration: '3-7 days',
    difficulty: 'Beginner',
    icon: Sparkles,
    color: 'primary',
    benefits: ['Sinus Health', 'Mental Clarity', 'Headache Relief', 'Respiratory Function'],
    precautions: ['Proper timing', 'Quality of medicines', 'Avoid cold exposure'],
    sessions: 3,
    rating: 4.6
  },
  {
    id: 'raktamokshana',
    name: 'Raktamokshana',
    title: 'Bloodletting Therapy',
    description: 'Purifies blood to treat various Pitta-related disorders',
    duration: '1-3 days',
    difficulty: 'Advanced',
    icon: Droplets,
    color: 'secondary',
    benefits: ['Blood Purification', 'Skin Conditions', 'Joint Disorders', 'Metabolic Issues'],
    precautions: ['Sterile environment', 'Expert supervision', 'Proper aftercare'],
    sessions: 2,
    rating: 4.5
  }
];

export default function TherapiesView() {
  const [selectedTherapy, setSelectedTherapy] = useState(therapies[0]);
  const [viewMode, setViewMode] = useState<'grid' | 'detail'>('grid');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-primary/10 text-primary border-primary/20';
      case 'Intermediate': return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Advanced': return 'bg-accent/10 text-accent border-accent/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'text-primary';
      case 'secondary': return 'text-secondary';
      case 'accent': return 'text-accent';
      default: return 'text-primary';
    }
  };

  if (viewMode === 'detail') {
    return (
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => setViewMode('grid')}
            className="mb-4"
          >
            ← Back to Therapies
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="therapy-card">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`p-4 bg-${selectedTherapy.color}/10 rounded-xl`}>
                    <selectedTherapy.icon className={`w-8 h-8 ${getColorClass(selectedTherapy.color)}`} />
                  </div>
                  <div>
                    <CardTitle className="text-3xl">{selectedTherapy.name}</CardTitle>
                    <CardDescription className="text-lg">{selectedTherapy.title}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {selectedTherapy.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-primary" />
                      Benefits
                    </h3>
                    <ul className="space-y-2">
                      {selectedTherapy.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-secondary" />
                      Precautions
                    </h3>
                    <ul className="space-y-2">
                      {selectedTherapy.precautions.map((precaution, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                          {precaution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="therapy-card">
              <CardHeader>
                <CardTitle>Therapy Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Duration</span>
                  <span className="font-medium">{selectedTherapy.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Sessions</span>
                  <span className="font-medium">{selectedTherapy.sessions}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Difficulty</span>
                  <Badge className={getDifficultyColor(selectedTherapy.difficulty)}>
                    {selectedTherapy.difficulty}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    <span className="font-medium">{selectedTherapy.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <Button variant="healing" className="w-full" size="lg">
                <Calendar className="w-5 h-5" />
                Book This Therapy
              </Button>
              <Button variant="outline" className="w-full">
                Consult Practitioner
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="therapy-card">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#2F5249]">Panchakarma Therapies</h1>
            <p className="text-muted-foreground mt-2">Discover traditional Ayurvedic healing treatments</p>
          </div>
          <Button variant="sacred">
            <BookOpen className="w-4 h-4" />
            Treatment Guide
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {therapies.map((therapy) => {
          const Icon = therapy.icon;
          return (
            <Card key={therapy.id} className="therapy-card group cursor-pointer hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`p-3 bg-${therapy.color}/10 rounded-xl`}>
                    <Icon className={`w-6 h-6 ${getColorClass(therapy.color)}`} />
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    <span className="text-sm font-medium">{therapy.rating}</span>
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {therapy.name}
                </CardTitle>
                <CardDescription>{therapy.title}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {therapy.description}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{therapy.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{therapy.sessions} sessions</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge className={getDifficultyColor(therapy.difficulty)}>
                    {therapy.difficulty}
                  </Badge>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      setSelectedTherapy(therapy);
                      setViewMode('detail');
                    }}
                    className="group-hover:text-primary"
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}