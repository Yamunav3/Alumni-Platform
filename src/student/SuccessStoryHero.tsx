import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { getSuccessStories, postStory } from "@/api/studentApi";
import { FileText, Send, X, BookOpen, ChevronRight } from "lucide-react";

interface storyType {
  id?: number;
  title: string;
  content: string;
  author: string;
  gradYear?: string;
  tags?: string[];
  createdAt?: string;
}

export default function SuccessStoryHero() {
  const { toast } = useToast();
  const [articles, setArticles] = useState<storyType[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    tags: [] as string[],
  });
  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const data = await getSuccessStories();
      const storiesArray = Array.isArray(data) ? data : [data];
      setArticles(storiesArray);
    } catch (error) {
      console.error("Error fetching stories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim() || !formData.author.trim()) {
      toast({ title: "Error", description: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    try {
      setSubmitting(true);
      await postStory(formData);
      toast({ title: "Success", description: "Article submitted successfully!" });
      setFormData({ title: "", content: "", author: "", tags: [] });
      setShowForm(false);
      fetchArticles();
    } catch (error) {
      toast({ title: "Error", description: "Failed to submit article.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData((prev) => ({ ...prev, tags: [...prev.tags, newTag.trim()] }));
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== tagToRemove) }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Articles & Success Stories</h2>
          <p className="text-sm text-muted-foreground">Share your journey and read stories from the alumni community</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar: Submit Form */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText className="w-5 h-5 text-purple-600" />
                {showForm ? "Write Article" : "Share Your Story"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {showForm ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Enter article title"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="author">Your Name *</Label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content">Content *</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      placeholder="Write your article..."
                      rows={5}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Tags</Label>
                    <div className="flex gap-2">
                      <Input
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="Add a tag"
                        onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleAddTag(); } }}
                      />
                      <Button type="button" variant="outline" size="sm" onClick={handleAddTag}>
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                          {tag}
                          <button type="button" onClick={() => handleRemoveTag(tag)} className="ml-1">
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      className="flex-1"
                      disabled={submitting}
                    >
                      {submitting ? "Submitting..." : <><Send className="w-4 h-4 mr-2" />Submit Article</>}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => { setShowForm(false); setFormData({ title: "", content: "", author: "", tags: [] }); }}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </form>
              ) : (
                <Button className="w-full" onClick={() => setShowForm(true)}>
                  <FileText className="w-4 h-4 mr-2" /> Write a New Article
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Main: Articles List */}
        <div className="lg:col-span-2 space-y-4">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-purple-500 border-t-transparent"></div>
            </div>
          ) : articles.length === 0 ? (
            <Card>
              <CardContent className="flex items-center justify-center py-12">
                <p className="text-muted-foreground">No articles yet. Be the first to share your story!</p>
              </CardContent>
            </Card>
          ) : (
            articles.map((article) => (
              <Card key={article.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{article.author}</Badge>
                        {article.gradYear && (
                          <span className="text-xs text-muted-foreground">Class of {article.gradYear}</span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {article.content}
                      </p>
                      {article.tags && article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {article.tags.map((tag) => (
                            <Badge key={tag} variant="outline">{tag}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-2" />
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}