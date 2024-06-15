const Script = require('../models/Script');

exports.createScript = async (req, res) => {
    const { title, content, branches, checkpoints } = req.body;
    try {
        const newScript = new Script({ title, content, branches, checkpoints });
        await newScript.save();
        res.json(newScript);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getScripts = async (req, res) => {
    try {
        const scripts = await Script.find();
        res.json(scripts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateScript = async (req, res) => {
    const { title, content, branches, checkpoints } = req.body;
    try {
        const script = await Script.findById(req.params.id);
        if (!script) return res.status(404).json({ message: 'Script not found' });

        script.title = title || script.title;
        script.content = content || script.content;
        script.branches = branches || script.branches;
        script.checkpoints = checkpoints || script.checkpoints;

        await script.save();
        res.json(script);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteScript = async (req, res) => {
    try {
        const script = await Script.findById(req.params.id);
        if (!script) return res.status(404).json({ message: 'Script not found' });

        await script.remove();
        res.json({ message: 'Script removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
