import { Container } from '../Common.styled';
import { ProjectsById } from '../../components/ui/home/portfolio/ProjectsById';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LoadPage } from '../../components/reused/load-spinner/LoadPage';
import GoogleAnalyticsWrapper from '../../components/google-analytics-wrapper/GoogleAnalyticsWrapper';
import { Call } from '../../components/reused/call/Call';
import { getPostsById } from '../../api/post.api';

const ProjectByOne = () => {
  const { idProject } = useParams();
  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!idProject) return;
    const fetchProjectOne = async () => {
      setIsLoading(true);
      const { post } = await getPostsById(idProject);
      setState(post);
      setIsLoading(false);
    };
    fetchProjectOne().catch(console.error);
  }, [idProject]);

  return (
    <GoogleAnalyticsWrapper>
      <Container>
        <div style={{ minHeight: 'calc(100vh - 80px)' }}>
          {isLoading ? <LoadPage /> : <ProjectsById post={state} />}
        </div>
      </Container>
      <Call />
    </GoogleAnalyticsWrapper>
  );
};

export default ProjectByOne;
