import { Router as createRouter } from 'express';

import Record from './Record';

const router = createRouter();

router.get('/', ({res}) => Record.find((err, records) => res.json(records)));

router.post('/', (req, res) => {
  if (!req.body || !req.body.task || !req.body.minutes) {
    return res.status(400).send('Record must contain {task, minutes}');
  }

  const record = new Record(req.body);
  record.save((err, saved) => res.status(201).send(saved));
});

export default router;
