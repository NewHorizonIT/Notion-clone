/**
 * @swagger
 * tags:
 *   name: Blocks
 *   description: Block management for page content
 */

/**
 * @swagger
 * /blocks:
 *   post:
 *     summary: Create a new block
 *     tags: [Blocks]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateBlock'
 *           examples:
 *             paragraph:
 *               summary: Paragraph block
 *               value:
 *                 pageId: "550e8400-e29b-41d4-a716-446655440000"
 *                 type: "paragraph"
 *                 content:
 *                   text: "Hello World"
 *                 orderIndex: 0
 *             heading:
 *               summary: Heading block
 *               value:
 *                 pageId: "550e8400-e29b-41d4-a716-446655440000"
 *                 type: "heading"
 *                 content:
 *                   text: "My Heading"
 *                   level: 1
 *                 orderIndex: 0
 *             checkList:
 *               summary: Checklist block
 *               value:
 *                 pageId: "550e8400-e29b-41d4-a716-446655440000"
 *                 type: "checkListItem"
 *                 content:
 *                   text: "Todo item"
 *                   checked: false
 *                 orderIndex: 0
 *     responses:
 *       201:
 *         description: Block created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 201
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Block'
 *       400:
 *         description: Invalid input or page not found
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /blocks/pages/{id}:
 *   get:
 *     summary: Get all blocks of a page
 *     tags: [Blocks]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Page ID
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 50
 *         description: Number of blocks to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Number of blocks to skip
 *     responses:
 *       200:
 *         description: List of blocks in the page
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Block'
 *       404:
 *         description: Page not found
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /blocks/{id}:
 *   get:
 *     summary: Get block by ID
 *     tags: [Blocks]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Block ID
 *     responses:
 *       200:
 *         description: Block details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Block'
 *       404:
 *         description: Block not found
 *       401:
 *         description: Unauthorized
 *
 *   put:
 *     summary: Update block
 *     tags: [Blocks]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Block ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateBlock'
 *           example:
 *             content:
 *               text: "Updated content"
 *             orderIndex: 1
 *     responses:
 *       200:
 *         description: Block updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Block'
 *       404:
 *         description: Block not found
 *       401:
 *         description: Unauthorized
 *
 *   delete:
 *     summary: Soft delete block
 *     tags: [Blocks]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Block ID
 *     responses:
 *       200:
 *         description: Block deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Block'
 *       404:
 *         description: Block not found
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /blocks/{id}/children:
 *   get:
 *     summary: Get children blocks of a parent block
 *     tags: [Blocks]
 *     security:
 *       - apiKey: []
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Parent Block ID
 *     responses:
 *       200:
 *         description: List of children blocks
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Block'
 *       404:
 *         description: Block not found
 *       401:
 *         description: Unauthorized
 */
