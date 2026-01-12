// import { useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import { Modal, message } from "antd";
// import { Search, Filter, Star, Users, Clock, Award, BookOpen, Target, CheckCircle, PlayCircle } from "lucide-react";

// interface Training {
//   id: number;
//   title: string;
//   provider: string;
//   duration: string;
//   level: string;
//   price: string;
//   rating: number;
//   students: number;
//   skills: string[];
//   description: string;
//   curriculum: {
//     module: string;
//     topics: string[];
//     duration: string;
//   }[];
//   instructor: string;
//   prerequisites: string[];
//   outcomes: string[];
//   certificate: boolean;
//   category: string;
// }

// interface TrainingSectionProps {
//   trainings: Training[];
// }

// const TrainingSection = ({ trainings }: TrainingSectionProps) => {
//   const [selectedTraining, setSelectedTraining] = useState<Training | null>(null);
//   const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
//   const [enrolledTrainings, setEnrolledTrainings] = useState<Set<number>>(new Set());

//   const showDetails = (training: Training) => {
//     setSelectedTraining(training);
//     setIsDetailsModalOpen(true);
//   };

//   const handleEnrollment = (trainingId: number) => {
//     setEnrolledTrainings(prev => new Set([...prev, trainingId]));
//     message.success('Successfully enrolled! You now have access to the course materials and can start learning immediately.');
//   };

//   return (
//     <div className="space-y-6">
//       {/* Search and Filter */}
//       <div className="flex flex-col sm:flex-row gap-4 mb-6">
//         <div className="relative flex-1">
//           <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//           <Input placeholder="Search training courses..." className="pl-10" />
//         </div>
//         <Button variant="outline" className="flex items-center gap-2">
//           <Filter className="h-4 w-4" />
//           Filter
//         </Button>
//       </div>

//       {/* Training Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//         {trainings.map((training) => (
//           <Card key={training.id} className="bg-gradient-card hover:shadow-card-asthra transition-asthra card-hover">
//             <CardHeader>
//               <CardTitle className="text-lg cursor-pointer hover:text-primary transition-colors" onClick={() => showDetails(training)}>
//                 {training.title}
//               </CardTitle>
//               <CardDescription className="flex items-center gap-2">
//                 <span>{training.provider}</span>
//                 <Badge variant="outline">{training.category}</Badge>
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="flex items-center justify-between text-sm">
//                 <Badge variant="outline">{training.level}</Badge>
//                 <div className="flex items-center gap-1">
//                   <Clock className="h-4 w-4 text-muted-foreground" />
//                   <span>{training.duration}</span>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-1">
//                   <Star className="h-4 w-4 text-warning fill-current" />
//                   <span>{training.rating}</span>
//                 </div>
//                 <span className="text-sm text-muted-foreground flex items-center gap-1">
//                   <Users className="h-4 w-4" />
//                   {training.students} students
//                 </span>
//               </div>
//               <div className="flex flex-wrap gap-1">
//                 {training.skills.slice(0, 3).map((skill) => (
//                   <Badge key={skill} variant="secondary" className="text-xs">
//                     {skill}
//                   </Badge>
//                 ))}
//                 {training.skills.length > 3 && (
//                   <Badge variant="secondary" className="text-xs">
//                     +{training.skills.length - 3} more
//                   </Badge>
//                 )}
//               </div>
//               {training.certificate && (
//                 <div className="flex items-center gap-1 text-sm text-success">
//                   <Award className="h-4 w-4" />
//                   <span>Certificate included</span>
//                 </div>
//               )}
//               <div className="flex items-center justify-between">
//                 <span className="text-lg font-bold text-primary">{training.price}</span>
//                 <div className="flex gap-2">
//                   <Button variant="outline" size="sm" onClick={() => showDetails(training)}>
//                     View Details
//                   </Button>
//                   <Button 
//                     className={`transition-asthra ${
//                       enrolledTrainings.has(training.id)
//                         ? 'bg-success hover:bg-success/80'
//                         : 'bg-gradient-secondary hover:shadow-asthra'
//                     }`}
//                     onClick={() => handleEnrollment(training.id)}
//                     disabled={enrolledTrainings.has(training.id)}
//                   >
//                     {enrolledTrainings.has(training.id) ? 'Enrolled' : 'Enroll Now'}
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Details Modal */}
//       <Modal
//         title={null}
//         open={isDetailsModalOpen}
//         onCancel={() => setIsDetailsModalOpen(false)}
//         width={1000}
//         footer={null}
//       >
//         {selectedTraining && (
//           <div className="p-6">
//             <div className="mb-6">
//               <h2 className="text-3xl font-bold mb-4">{selectedTraining.title}</h2>
//               <div className="flex items-center gap-4 mb-4">
//                 <Badge variant="outline" className="text-sm">{selectedTraining.provider}</Badge>
//                 <Badge variant="secondary">{selectedTraining.category}</Badge>
//                 <Badge variant="outline">{selectedTraining.level}</Badge>
//                 {selectedTraining.certificate && (
//                   <Badge variant="default" className="bg-success">
//                     <Award className="h-3 w-3 mr-1" />
//                     Certificate
//                   </Badge>
//                 )}
//               </div>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm bg-muted/20 rounded-lg p-4">
//                 <div className="flex items-center gap-2">
//                   <Clock className="h-4 w-4 text-muted-foreground" />
//                   <span>{selectedTraining.duration}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Star className="h-4 w-4 text-warning fill-current" />
//                   <span>{selectedTraining.rating} rating</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Users className="h-4 w-4 text-muted-foreground" />
//                   <span>{selectedTraining.students} students</span>
//                 </div>
//                 <div className="text-right">
//                   <span className="text-2xl font-bold text-primary">{selectedTraining.price}</span>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
//                   <BookOpen className="h-5 w-5 text-primary" />
//                   Course Description
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed">{selectedTraining.description}</p>
//               </div>

//               <div>
//                 <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
//                   <Target className="h-5 w-5 text-secondary" />
//                   What You'll Learn
//                 </h3>
//                 <div className="grid md:grid-cols-2 gap-2">
//                   {selectedTraining.outcomes.map((outcome, index) => (
//                     <div key={index} className="flex items-start gap-2">
//                       <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
//                       <span className="text-muted-foreground">{outcome}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-xl font-semibold mb-3">Course Curriculum</h3>
//                 <div className="space-y-4">
//                   {selectedTraining.curriculum.map((module, index) => (
//                     <div key={index} className="border border-border rounded-lg p-4">
//                       <div className="flex items-center justify-between mb-2">
//                         <h4 className="font-semibold flex items-center gap-2">
//                           <PlayCircle className="h-4 w-4 text-primary" />
//                           Module {index + 1}: {module.module}
//                         </h4>
//                         <Badge variant="outline" className="text-xs">{module.duration}</Badge>
//                       </div>
//                       <ul className="space-y-1 text-sm text-muted-foreground ml-6">
//                         {module.topics.map((topic, topicIndex) => (
//                           <li key={topicIndex}>• {topic}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">Prerequisites</h3>
//                   <ul className="space-y-1">
//                     {selectedTraining.prerequisites.map((prereq, index) => (
//                       <li key={index} className="flex items-start gap-2">
//                         <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
//                         <span className="text-muted-foreground text-sm">{prereq}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">Skills You'll Gain</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedTraining.skills.map((skill) => (
//                       <Badge key={skill} variant="secondary">{skill}</Badge>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-muted/20 rounded-lg p-4">
//                 <h4 className="font-semibold mb-2">Instructor</h4>
//                 <p className="text-muted-foreground">{selectedTraining.instructor}</p>
//               </div>
//             </div>

//             <div className="text-center mt-8">
//               <Button 
//                 size="lg" 
//                 className={`px-8 transition-asthra ${
//                   enrolledTrainings.has(selectedTraining.id)
//                     ? 'bg-success hover:bg-success/80'
//                     : 'bg-gradient-secondary hover:shadow-asthra'
//                 }`}
//                 onClick={() => {
//                   handleEnrollment(selectedTraining.id);
//                   setIsDetailsModalOpen(false);
//                 }}
//                 disabled={enrolledTrainings.has(selectedTraining.id)}
//               >
//                 <BookOpen className="h-5 w-5 mr-2" />
//                 {enrolledTrainings.has(selectedTraining.id) 
//                   ? 'Successfully Enrolled!' 
//                   : `Enroll Now - ${selectedTraining.price}`
//                 }
//               </Button>
//             </div>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default TrainingSection;





import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Modal, message } from "antd";
import { 
  Search, Filter, Star, Users, Clock, Award, 
  BookOpen, Target, CheckCircle, PlayCircle 
} from "lucide-react";

interface Training {
  id: number;
  title: string;
  provider: string;
  duration: string;
  level: string;
  price: string;
  rating: number;
  students: number;
  skills: string[];
  description: string;
  curriculum: {
    module: string;
    topics: string[];
    duration: string;
  }[];
  instructor: string;
  prerequisites: string[];
  outcomes: string[];
  certificate: boolean;
  category: string;
}

interface TrainingSectionProps {
  trainings: Training[];
}

const TrainingSection = ({ trainings }: TrainingSectionProps) => {
  const [selectedTraining, setSelectedTraining] = useState<Training | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [enrolledTrainings, setEnrolledTrainings] = useState<Set<number>>(new Set());

  const showDetails = (training: Training) => {
    setSelectedTraining(training);
    setIsDetailsModalOpen(true);
  };

  const handleEnrollment = (trainingId: number) => {
    setEnrolledTrainings(prev => new Set([...prev, trainingId]));
    message.success('Successfully enrolled! You now have access to the course materials and can start learning immediately.');
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search training courses..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Training Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {trainings.map((training) => (
          <Card
            key={training.id}
            className="relative bg-gradient-card rounded-2xl cursor-pointer group
                       transition-transform duration-300 ease-in-out
                       hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl
                       hover:border hover:border-primary/40"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                            transition duration-500 pointer-events-none 
                            bg-gradient-to-r from-primary/10 via-white/20 to-white/30 blur-lg"></div>

            <CardHeader className="relative z-10">
              <CardTitle 
                className="text-lg font-semibold cursor-pointer 
                           group-hover:text-primary transition-colors duration-300"
                onClick={() => showDetails(training)}
              >
                {training.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-2">
                <span>{training.provider}</span>
                <Badge variant="outline">{training.category}</Badge>
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 relative z-10">
              <div className="flex items-center justify-between text-sm">
                <Badge variant="outline">{training.level}</Badge>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{training.duration}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-warning fill-current" />
                  <span>{training.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {training.students} students
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {training.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
                {training.skills.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{training.skills.length - 3} more
                  </Badge>
                )}
              </div>
              {training.certificate && (
                <div className="flex items-center gap-1 text-sm text-success">
                  <Award className="h-4 w-4" />
                  <span>Certificate included</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">{training.price}</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => showDetails(training)}>
                    View Details
                  </Button>
                  <Button 
                    className={`transition-asthra text-black${
                      enrolledTrainings.has(training.id)
                        ? 'bg-success hover:bg-success/80'
                        : 'bg-gradient-secondary hover:shadow-asthra'
                    }`}
                    onClick={() => handleEnrollment(training.id)}
                    disabled={enrolledTrainings.has(training.id)}
                  >
                    {enrolledTrainings.has(training.id) ? 'Enrolled' : 'Enroll Now'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Details Modal */}
      <Modal
        title={null}
        open={isDetailsModalOpen}
        onCancel={() => setIsDetailsModalOpen(false)}
        width={1000}
        footer={null}
        className="custom-modal"
      >
        {selectedTraining && (
          <div className="p-6 max-h-[80vh] overflow-y-auto">
            {/* Blue backshadow on scroll */}
            <style>{`
              .custom-modal .ant-modal-body::-webkit-scrollbar {
                width: 8px;
              }
              .custom-modal .ant-modal-body::-webkit-scrollbar-thumb {
                background: linear-gradient(to bottom, #3b82f6, #06b6d4);
                border-radius: 9999px;
              }
              .custom-modal .ant-modal-body::-webkit-scrollbar-track {
                background: #f1f5f9;
              }
            `}</style>

            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-4">{selectedTraining.title}</h2>
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="outline" className="text-sm">{selectedTraining.provider}</Badge>
                <Badge variant="secondary">{selectedTraining.category}</Badge>
                <Badge variant="outline">{selectedTraining.level}</Badge>
                {selectedTraining.certificate && (
                  <Badge variant="default" className="bg-success">
                    <Award className="h-3 w-3 mr-1" />
                    Certificate
                  </Badge>
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm bg-muted/20 rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedTraining.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-warning fill-current" />
                  <span>{selectedTraining.rating} rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedTraining.students} students</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-primary">{selectedTraining.price}</span>
                </div>
              </div>
            </div>

            {/* --- Course Details Content (unchanged) --- */}
            {/* Keep the rest of your details modal code as is */}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default TrainingSection;
