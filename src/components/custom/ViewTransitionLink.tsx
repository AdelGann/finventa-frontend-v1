import { Link, useLocation, useNavigate } from 'react-router-dom';

interface ViewTransitionLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  replace?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  state?: Record<string, unknown> | null;
}

export const ViewTransitionLink = ({
  to,
  children,
  className,
  replace = false,
  onClick,
  state,
}: ViewTransitionLinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (document.startViewTransition) {
      if (location.pathname === to) {
        return;
      }
      document.startViewTransition(() => {
        navigate(to, { replace, state });
      });
    } else {
      navigate(to, { replace, state });
    }

    onClick?.(e);
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={className}
      replace={replace}
      state={state}
    >
      {children}
    </Link>
  );
};
