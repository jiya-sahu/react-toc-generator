export function slugify(text) {
  return text
    .toLowerCase()
    .trim()                        
    .replace(/[^\w\s-]/g, '')      
    .replace(/\s+/g, '-')          
    .replace(/-+/g, '-')          
    .replace(/^-+|-+$/g, '');      
}