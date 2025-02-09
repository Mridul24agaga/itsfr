export function generatePlaceholderImage(text: string): string {
    const encodedText = encodeURIComponent(text)
    return `https://placehold.co/400x200/FFFFFF/000000?text=${encodedText}`
  }
  
  