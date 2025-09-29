import 'package:flutter/material.dart';

class SliverAppBarExample extends StatelessWidget {
  const SliverAppBarExample({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: CustomScrollView(
          slivers: <Widget>[
            SliverAppBar(
              pinned: true,
              expandedHeight: 250.0,
              flexibleSpace: FlexibleSpaceBar(title: Text('SliverAppBar')),
            ),
            SliverFillRemaining(child: Center(child: Text('Scroll up!'))),
          ],
        ),
      ),
    );
  }
}
