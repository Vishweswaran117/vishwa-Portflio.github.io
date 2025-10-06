import { useAuth } from "@/hooks/use-auth";
import { useNavigate } from "react-router";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect, useState } from "react";
import { Loader2, Mail, Trash2, Plus, Save, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import type { Id } from "@/convex/_generated/dataModel";

export default function Admin() {
  const { isLoading, isAuthenticated, user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("messages");

  // Check if user is admin
  const isAdmin = user?.email === "iamvishwa117@gmail.com";

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/auth?redirect=/admin");
    }
    if (!isLoading && isAuthenticated && !isAdmin) {
      toast.error("Unauthorized access");
      navigate("/");
    }
  }, [isLoading, isAuthenticated, isAdmin, navigate]);

  if (isLoading || !isAuthenticated || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-yellow-700" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-yellow-500/30 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate("/")}
              className="text-yellow-700 font-bold text-xl font-mono cursor-pointer"
            >
              VISHWA ADMIN
            </button>
            <Button
              onClick={() => signOut()}
              variant="outline"
              className="font-mono"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold font-mono text-yellow-700 mb-8">
          ADMIN PANEL_
        </h1>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="home">Home Content</TabsTrigger>
          </TabsList>

          <TabsContent value="messages">
            <MessagesTab />
          </TabsContent>

          <TabsContent value="projects">
            <ProjectsTab />
          </TabsContent>

          <TabsContent value="skills">
            <SkillsTab />
          </TabsContent>

          <TabsContent value="achievements">
            <AchievementsTab />
          </TabsContent>

          <TabsContent value="home">
            <HomeContentTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function MessagesTab() {
  const messages = useQuery(api.admin.getAllMessages);
  const deleteMessage = useMutation(api.admin.deleteMessage);

  const handleDelete = async (id: Id<"messages">) => {
    try {
      await deleteMessage({ id });
      toast.success("Message deleted");
    } catch (error) {
      toast.error("Failed to delete message");
    }
  };

  if (!messages) {
    return <Loader2 className="w-8 h-8 animate-spin text-yellow-700" />;
  }

  return (
    <div className="space-y-4">
      <CardDescription className="font-mono">
        Total Messages: {messages.length}
      </CardDescription>
      {messages.map((msg) => (
        <Card key={msg._id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="font-mono text-lg">{msg.name}</CardTitle>
                <CardDescription className="font-mono">
                  {msg.email} • {msg.phone}
                </CardDescription>
              </div>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => handleDelete(msg._id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-mono text-sm text-gray-700">{msg.message}</p>
            <p className="font-mono text-xs text-gray-500 mt-2">
              {new Date(msg._creationTime).toLocaleString()}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ProjectsTab() {
  const projects = useQuery(api.admin.getAllProjects);
  const createProject = useMutation(api.admin.createProject);
  const updateProject = useMutation(api.admin.updateProject);
  const deleteProject = useMutation(api.admin.deleteProject);

  const [editingId, setEditingId] = useState<Id<"projects"> | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tech: "",
    image: "",
    github: "",
    live: "",
    order: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = {
        ...formData,
        tech: formData.tech.split(",").map((t) => t.trim()),
      };

      if (editingId) {
        await updateProject({ id: editingId, ...data });
        toast.success("Project updated");
      } else {
        await createProject(data);
        toast.success("Project created");
      }

      setFormData({
        title: "",
        description: "",
        tech: "",
        image: "",
        github: "",
        live: "",
        order: 0,
      });
      setEditingId(null);
    } catch (error) {
      toast.error("Failed to save project");
    }
  };

  const handleEdit = (project: any) => {
    setEditingId(project._id);
    setFormData({
      title: project.title,
      description: project.description,
      tech: project.tech.join(", "),
      image: project.image,
      github: project.github,
      live: project.live,
      order: project.order,
    });
  };

  const handleDelete = async (id: Id<"projects">) => {
    try {
      await deleteProject({ id });
      toast.success("Project deleted");
    } catch (error) {
      toast.error("Failed to delete project");
    }
  };

  if (!projects) {
    return <Loader2 className="w-8 h-8 animate-spin text-yellow-700" />;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-mono">
            {editingId ? "Edit Project" : "Add New Project"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
            <Textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
            <Input
              placeholder="Technologies (comma separated)"
              value={formData.tech}
              onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
              required
            />
            <Input
              placeholder="Image URL"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              required
            />
            <Input
              placeholder="GitHub URL"
              value={formData.github}
              onChange={(e) => setFormData({ ...formData, github: e.target.value })}
              required
            />
            <Input
              placeholder="Live URL"
              value={formData.live}
              onChange={(e) => setFormData({ ...formData, live: e.target.value })}
              required
            />
            <Input
              type="number"
              placeholder="Order"
              value={formData.order}
              onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
              required
            />
            <div className="flex gap-2">
              <Button type="submit" className="font-mono">
                <Save className="w-4 h-4 mr-2" />
                {editingId ? "Update" : "Create"}
              </Button>
              {editingId && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setEditingId(null);
                    setFormData({
                      title: "",
                      description: "",
                      tech: "",
                      image: "",
                      github: "",
                      live: "",
                      order: 0,
                    });
                  }}
                >
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project._id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-mono">{project.title}</CardTitle>
                  <CardDescription className="font-mono">
                    {project.tech.join(", ")}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(project)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(project._id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-mono text-sm">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function SkillsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-mono">Skills Management</CardTitle>
        <CardDescription className="font-mono">
          Skills management coming soon. For now, edit skills directly in the code.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

function AchievementsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-mono">Achievements Management</CardTitle>
        <CardDescription className="font-mono">
          Achievements management coming soon. For now, edit achievements directly in the code.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

function HomeContentTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-mono">Home Content Management</CardTitle>
        <CardDescription className="font-mono">
          Home content management coming soon. For now, edit content directly in the code.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
