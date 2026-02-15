export interface Application {
  id: string;
  studentName: string;
  dateOfBirth: string;
  gender: string;
  previousSchool?: string;
  gradeApplying: string;
  parentName: string;
  relationship: string;
  phone: string;
  email?: string;
  address: string;
  additionalInfo?: string;
  status: "pending" | "accepted" | "rejected";
  submittedAt: string;
}

const APPLICATIONS_KEY = "ondati_applications";
const ADMIN_SESSION_KEY = "ondati_admin_session";

// Hardcoded credentials (NOT SECURE — front-end only demo)
const ADMIN_USERNAME = "Mavosam4";
const ADMIN_PASSWORD = "Mavosam@2025";

export function getApplications(): Application[] {
  try {
    const data = localStorage.getItem(APPLICATIONS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveApplication(app: Omit<Application, "id" | "status" | "submittedAt">): Application {
  const applications = getApplications();
  const newApp: Application = {
    ...app,
    id: crypto.randomUUID(),
    status: "pending",
    submittedAt: new Date().toISOString(),
  };
  applications.push(newApp);
  localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(applications));
  return newApp;
}

export function updateApplicationStatus(id: string, status: "accepted" | "rejected") {
  const applications = getApplications();
  const index = applications.findIndex((a) => a.id === id);
  if (index !== -1) {
    applications[index].status = status;
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(applications));
  }
}

export function adminLogin(username: string, password: string): boolean {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    localStorage.setItem(ADMIN_SESSION_KEY, "true");
    return true;
  }
  return false;
}

export function isAdminLoggedIn(): boolean {
  return localStorage.getItem(ADMIN_SESSION_KEY) === "true";
}

export function adminLogout() {
  localStorage.removeItem(ADMIN_SESSION_KEY);
}
