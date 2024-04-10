import { IRequest } from "@interfaces/requests/request";
import { IResource, IResourceFilter } from "@interfaces/models/resource";
import Joi, { ObjectSchema } from "joi";

export const resourceSchema: ObjectSchema<IRequest<{}, IResource, {}>> = Joi.object({
  body: Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
  }).required(),
});


export const resourceFilterSchema: ObjectSchema<IRequest<IResourceFilter, {}, {}>> = Joi.object({
  query: Joi.object({
    name: Joi.string(),
    time: Joi.string().regex(/^(DESC|ASC|desc|asc)$/),
  }),
});

export const resourceUpdateSchema: ObjectSchema<IRequest<{}, IResource, { id: Number }>> = Joi.object({
  body: Joi.object({
    name: Joi.string(),
    description: Joi.string(),
  }).required(),
  params: Joi.object({
    id: Joi.number().required(),
  }).required(),
});

export const resourceDeleteOneSchema: ObjectSchema<IRequest<{}, {}, { id: Number }>> = Joi.object({
  params: Joi.object({
    id: Joi.number().required(),
  }).required(),
});