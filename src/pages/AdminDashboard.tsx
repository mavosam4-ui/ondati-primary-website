import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, CheckCircle, XCircle, Clock, Users, FileText, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getApplications, updateApplicationStatus, isAdminLoggedIn, adminLogout, type Application } from "@/lib/storage";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      navigate("/admin");
      return;
    }
    setApplications(getApplications());
  }, [navigate]);

  const refresh = () => setApplications(getApplications());

  const handleStatus = (id: string, status: "accepted" | "rejected") => {
    updateApplicationStatus(id, status);
    refresh();
    toast({
      title: status === "accepted" ? "Application Accepted" : "Application Rejected",
      description: `The application has been ${status}.`,
    });
  };

  const handleLogout = () => {
    adminLogout();
    navigate("/admin");
  };

  const pending = applications.filter((a) => a.status === "pending").length;
  const accepted = applications.filter((a) => a.status === "accepted").length;
  const rejected = applications.filter((a) => a.status === "rejected").length;

  const statusBadge = (status: Application["status"]) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="border-amber-500 text-amber-600"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case "accepted":
        return <Badge className="bg-emerald-600 hover:bg-emerald-700"><CheckCircle className="w-3 h-3 mr-1" />Accepted</Badge>;
      case "rejected":
        return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <div>
            <h1 className="font-heading font-extrabold text-lg text-foreground">Admin Dashboard</h1>
            <p className="text-xs text-muted-foreground">Welcome, Mavo B. Sam</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={refresh}>
              <RefreshCw className="w-4 h-4 mr-1" /> Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-1" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Applications</CardTitle>
              <Users className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-heading font-extrabold text-foreground">{applications.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
              <Clock className="w-5 h-5 text-amber-500" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-heading font-extrabold text-amber-600">{pending}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Accepted</CardTitle>
              <CheckCircle className="w-5 h-5 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-heading font-extrabold text-emerald-600">{accepted}</p>
            </CardContent>
          </Card>
        </div>

        {/* Applications Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" /> Student Applications
            </CardTitle>
          </CardHeader>
          <CardContent>
            {applications.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <FileText className="w-12 h-12 mx-auto mb-3 opacity-40" />
                <p className="font-medium">No applications yet</p>
                <p className="text-sm">Applications submitted on the Admissions page will appear here.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Parent/Guardian</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell className="font-medium">{app.studentName}</TableCell>
                      <TableCell>{app.gradeApplying}</TableCell>
                      <TableCell>{app.parentName}</TableCell>
                      <TableCell>{app.phone}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(app.submittedAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{statusBadge(app.status)}</TableCell>
                      <TableCell className="text-right">
                        {app.status === "pending" ? (
                          <div className="flex justify-end gap-2">
                            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => handleStatus(app.id, "accepted")}>
                              <CheckCircle className="w-3 h-3 mr-1" /> Accept
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => handleStatus(app.id, "rejected")}>
                              <XCircle className="w-3 h-3 mr-1" /> Reject
                            </Button>
                          </div>
                        ) : (
                          <span className="text-sm text-muted-foreground">—</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
