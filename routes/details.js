import express from 'express';
const router = express.Router();
const youtubeUrl = 'https://www.youtube.com/playlist';

import { getDetails } from '../controllers/details.js';
import { noLinkProvided } from '../controllers/noLink.js';

router.get(`/${youtubeUrl}`, getDetails);
router.get(`/`, noLinkProvided);

export default router;