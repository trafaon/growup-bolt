import { 
  FlagIcon, 
  MagnifyingGlassIcon, 
  LightBulbIcon, 
  ArrowTrendingUpIcon 
} from '@heroicons/react/24/outline';
import { ROUTES } from './routes';

export const GROW_STAGES = [
  {
    title: 'Goal',
    description: 'Define your objectives and success criteria',
    color: 'bg-green-50',
    iconColor: 'text-green-600',
    path: ROUTES.GOAL,
    Icon: FlagIcon
  },
  {
    title: 'Reality',
    description: 'Assess your current situation',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    path: ROUTES.REALITY,
    Icon: MagnifyingGlassIcon
  },
  {
    title: 'Options',
    description: 'Explore possible paths forward',
    color: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    path: ROUTES.OPTIONS,
    Icon: LightBulbIcon
  },
  {
    title: 'Way Forward',
    description: 'Plan your next steps',
    color: 'bg-orange-50',
    iconColor: 'text-orange-600',
    path: ROUTES.WAY_FORWARD,
    Icon: ArrowTrendingUpIcon
  }
] as const;