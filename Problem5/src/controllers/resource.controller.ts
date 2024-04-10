import { Resource } from '@models/resource.model';
import { Model, importModels } from '@sequelize/core';
import { IResource } from "@interfaces/models/resource";
import { NextFunction, Request, Response } from "express";
// import AuthService from "@services/auth";

/**
 * @Controller("/auth")
 */
class ResourceController {
  /**
   *
   * @method "post"
   * @path "/create"
   * @param req
   * @param res
   * @param next
   */
  public async create(req: Request<{}, {}, IResource>, res: Response, next: NextFunction) {
    try {
      const body: IResource = req.body;
      const data = await Resource.create({ ...body });
      next({
        code: 0,
        message: "success",
        data: data,
      });
    } catch (error) {
      next({
        code: false,
        message: error.message,
      });

    }
  }

  /**
  *
  * @method "get"
  * @path "/get-all"
  * @param req
  * @param res
  * @param next
  */
  public async getAllByFilter(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query;
      let data: Resource[];
      if (!query.name) {
        data = await Resource.findAll({ order: [['createdAt', `${query.time || 'DESC'}`]] });
      } else {
        data = await Resource.findAll({ where: { name: `${query.name}` }, order: [['createdAt', `${query.time || 'DESC'}`]] });
      }
      next({
        code: 0,
        message: "success",
        data: data,
      });
    } catch (error) {
      next({
        code: false,
        message: error.message,
      });
    }
  }

  /**
 *
 * @method "get"
 * @path "/:id"
 * @param req
 * @param res
 * @param next
 */
  public async getOne(req: Request<{ id: Number }, {}, {}>, res: Response, next: NextFunction) {
    try {
      const params = Number(req.params.id);
      if (!params)
        next({
          code: -12,
          message: 'Invalid resource id',
        });
      const data = await Resource.findByPk(params);
      next({
        code: 0,
        message: 'success',
        data
      });
    } catch (error) {
      next({
        code: false,
        message: error.message,
      });
    }
  }


  /**
 *
 * @method "patch"
 * @path "/:id"
 * @param req
 * @param res
 * @param next
 */
  public async updateOne(req: Request<any, {}, IResource>, res: Response, next: NextFunction) {
    try {
      const params = Number(req.params.id);
      const body: IResource = req.body;
      const isResourceExist = await Resource.findByPk(params);
      if (!isResourceExist)
        next({
          code: -12,
          message: 'Resource not found',
        });
      await Resource.update({ ...body }, { where: { id: params } });
      next({
        code: 0,
        message: 'success',
      });
    } catch (error) {
      next({
        code: false,
        message: error.message,
      });
    }
  }
  /**
 *
 * @method "delete"
 * @path "/:id"
 * @param req
 * @param res
 * @param next
 */
  public async deleteOne(req: Request<any, {}, {}>, res: Response, next: NextFunction) {
    try {
      const params = Number(req.params.id);
      const isResourceExist = await Resource.findByPk(params);
      if (!isResourceExist)
        next({
          code: -12,
          message: 'Resource not found',
        });
      await isResourceExist.destroy();
      next({
        code: 0,
        message: 'success',
      });
    } catch (error) {
      next({
        code: false,
        message: error.message,
      });
    }
  }
}
export default new ResourceController();