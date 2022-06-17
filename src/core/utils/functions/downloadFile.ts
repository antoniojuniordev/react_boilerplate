export async function downloadDoc(fileURL: string) {
  fetch('https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `248797.jpeg`);
      document.body.appendChild(link);
      link.click();
      link?.parentNode?.removeChild(link);
    });
}
