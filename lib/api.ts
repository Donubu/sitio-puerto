export async function fetchProjects() {
  const response = await fetch('/api/projects');
  
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  
  return response.json();
}

export async function fetchProjectBySlug(slug: string) {
  const response = await fetch(`/api/projects/${encodeURIComponent(slug)}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch project');
  }
  
  return response.json();
}

export async function fetchRelatedProjects(id: string, limit: number = 2) {
  const response = await fetch(`/api/projects/related?id=${encodeURIComponent(id)}&limit=${limit}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch related projects');
  }
  
  return response.json();
}

export async function fetchMembers(department?: string) {
  const url = new URL('/api/members', window.location.origin);
  if (department) {
    url.searchParams.append('department', department);
  }

  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch team members');
  }
  
  return response.json();
}

export async function fetchClients() {
  const url = new URL('/api/clients', window.location.origin);
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch clients');
  }
  
  return response.json();
}

export async function fetchTestimonials() {
  const url = new URL('/api/clients', window.location.origin);
  url.searchParams.append('type', 'testimonials');
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch testimonials');
  }
  
  return response.json();
}