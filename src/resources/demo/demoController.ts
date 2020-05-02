import {Request, Response} from 'express';

// GET /demo
export function index(_: Request, res: Response) {
  res.json({data: [{text: 'demo'}]});
}

// GET /demo/:demo_id
//export function show(req: Request, res: Response) {}

// POST /demo
//export function store(req: Request, res: Response) {}

// PUT /demo/demo_id
//export function update(req: Request, res: Response) {}

// DELETE /demo/demo_id
//export function destroy(req: Request, res: Response) {}
