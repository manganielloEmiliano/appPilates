## Métodos en Mongoose

### Métodos para **Crear** y **Actualizar**

- **`create()`**
  - Crea uno o más documentos en la colección.
  - ```javascript
    await Usuario.create({ nombre: 'Juan', edad: 30 });
    ```

- **`updateOne()`**
  - Actualiza un solo documento que coincida con el filtro especificado.
  - ```javascript
    await Usuario.updateOne({ nombre: 'Juan' }, { $set: { edad: 31 } });
    ```

- **`updateMany()`**
  - Actualiza múltiples documentos que coincidan con el filtro especificado.
  - ```javascript
    await Usuario.updateMany({ edad: { $lt: 30 } }, { $set: { activo: true } });
    ```

- **`findOneAndUpdate()`**
  - Encuentra un documento y lo actualiza, devolviendo el documento original o el modificado.
  - ```javascript
    const usuario = await Usuario.findOneAndUpdate({ nombre: 'Juan' }, { $set: { edad: 31 } }, { new: true });
    ```

- **`findByIdAndUpdate()`**
  - Encuentra un documento por su ID y lo actualiza.
  - ```javascript
    const usuario = await Usuario.findByIdAndUpdate(id, { $set: { edad: 31 } }, { new: true });
    ```

### Métodos para **Eliminar**

- **`deleteOne()`**
  - Elimina un solo documento que coincida con el filtro especificado.
  - ```javascript
    await Usuario.deleteOne({ nombre: 'Juan' });
    ```

- **`deleteMany()`**
  - Elimina múltiples documentos que coincidan con el filtro especificado.
  - ```javascript
    await Usuario.deleteMany({ edad: { $lt: 30 } });
    ```

- **`findOneAndDelete()`**
  - Encuentra un documento y lo elimina, devolviendo el documento eliminado.
  - ```javascript
    const usuario = await Usuario.findOneAndDelete({ nombre: 'Juan' });
    ```

- **`findByIdAndDelete()`**
  - Encuentra un documento por su ID y lo elimina.
  - ```javascript
    const usuario = await Usuario.findByIdAndDelete(id);
    ```

### Métodos para **Buscar**

- **`find()`**
  - Busca múltiples documentos que coincidan con el filtro especificado.
  - ```javascript
    const usuarios = await Usuario.find({ edad: { $gt: 30 } });
    ```

- **`findOne()`**
  - Busca un solo documento que coincida con el filtro especificado.
  - ```javascript
    const usuario = await Usuario.findOne({ nombre: 'Juan' });
    ```

- **`findById()`**
  - Busca un documento por su ID.
  - ```javascript
    const usuario = await Usuario.findById(id);
    ```

- **`countDocuments()`**
  - Cuenta el número de documentos que coincidan con el filtro especificado.
  - ```javascript
    const count = await Usuario.countDocuments({ edad: { $lt: 30 } });
    ```

- **`aggregate()`**
  - Realiza agregaciones más complejas utilizando el framework de agregación de MongoDB.
  - ```javascript
    const resultado = await Usuario.aggregate([
      { $match: { edad: { $gt: 30 } } },
      { $group: { _id: '$sexo', total: { $sum: 1 } } }
    ]);
    ```

### Otros Métodos Útiles

- **`findOneAndReplace()`**
  - Encuentra un documento y lo reemplaza con el documento proporcionado.
  - ```javascript
    const usuario = await Usuario.findOneAndReplace({ nombre: 'Juan' }, { nombre: 'Juan', edad: 31 });
    ```

- **`distinct()`**
  - Encuentra valores únicos para un campo específico.
  - ```javascript
    const nombres = await Usuario.distinct('nombre');
    ```
