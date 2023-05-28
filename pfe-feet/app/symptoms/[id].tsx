import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SlugPage = () => {
  const router = useRouter();
  const { slug } = router.query; // Récupère la valeur du slug depuis l'URL

  useEffect(() => {
    // Utilisez le slug pour effectuer les opérations nécessaires (récupérer les données, effectuer des requêtes, etc.)
    // Par exemple, vous pouvez appeler une fonction fetchData(slug) ici
    // Assurez-vous d'utiliser un état pour stocker les données récupérées et les afficher dans votre composant

    // fetchData(slug);
  }, [slug]);

  // Rendu de votre composant avec les données récupérées

  return (
    <div>
      <h1>Slug Page</h1>
      <p>Slug: {slug}</p>
    </div>
  );
};

export default SlugPage;