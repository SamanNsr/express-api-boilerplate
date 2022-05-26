import { ExtractJwt } from 'passport-jwt';
import { ApiHandler } from '../utils';
import { authenticationService } from '../config/externals';

const auth = (...requiredRights) => async (req, res, next) => {
  // check if user is authenticated
};

export default auth;
